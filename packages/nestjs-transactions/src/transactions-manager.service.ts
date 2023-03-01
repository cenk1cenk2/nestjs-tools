import { Injectable, InternalServerErrorException, Logger, Scope } from '@nestjs/common'
import { InjectConnection } from '@nestjs/typeorm'
import type { EntityManager } from 'typeorm'
import { Connection } from 'typeorm'

import type {
  CheckBeforeTransaction,
  GetTransactionType,
  InitialTransaction,
  ParallelTransaction,
  RollbackTransaction,
  TransactionManagerOptions
} from './transactions-manager.interface'

@Injectable({ scope: Scope.DEFAULT })
export class TransactionsManager<Event extends string = string, Map extends Partial<Record<Event, any>> = Partial<Record<Event, any>>> {
  private transactions: ParallelTransaction<Event, Map>[] = []
  private checkBeforeTransaction: CheckBeforeTransaction[] = []
  private inProgressTransactions: ParallelTransaction<Event, Map>[] = []
  private initialTransactions: InitialTransaction<Event, Map>[] = []
  private rollbackTransactions: RollbackTransaction<Event, Map>[] = []
  private results: GetTransactionType<Event, Map> = {} as GetTransactionType<Event, Map>
  private logger: Logger = new Logger(this.constructor.name)
  // do not need to create a dynamic module for now, will hardcode the options
  private options: TransactionManagerOptions = {
    // transaction timeout in 1 minute, should be enough
    timeout: 60000 * 1
  }

  constructor (@InjectConnection() private connection: Connection) {}

  /**
   * Sometimes the scope.request is just too much to isolate transactions, there you can create a custom instance for injecting to events or such.
   * @template ChildEvent
   * @template ChildMap
   * @returns {TransactionsManager<ChildEvent, ChildMap>}
   * @memberof TransactionsManager
   */
  public createChild<ChildEvent extends Event>(): TransactionsManager<ChildEvent, Map> {
    return new TransactionsManager<ChildEvent, Map>(this.connection)
  }

  /**
   * Add a new transaction, with optional check or rollback.
   * Checks will be executed before any transactions to check whether the operation is performable.
   * Transactions with token are initial transactions and will get their result saved for further use.
   * Transactions without any depends on and token are parallel transactions that will execute after the initial ones.
   * Rollback transactions will get executed if something goes wrong.
   *
   * @param transaction
   */
  public add (transaction: (ParallelTransaction<Event, Map> | InitialTransaction<Event, Map>) & Partial<CheckBeforeTransaction & RollbackTransaction<Event, Map>>): void {
    // check has events and add them to lists

    if (this.hasCheckBeforeTransaction(transaction)) {
      this.checkBeforeTransaction.push({ check: transaction.check })

      // this.logger.debug('Added a new check before transactions.')
    }

    if (this.hasRollback(transaction)) {
      this.rollbackTransactions.push({ rollback: transaction.rollback })

      // this.logger.debug('Injected a new rollback transaction.')
    }

    // check transaction type and add it to list

    if (this.isInitialTransaction(transaction)) {
      this.initialTransactions.push(transaction)

      // this.logger.debug(`Injected a new initial transaction with token ${transaction.token}.`)
    } else if (this.isParallelTransaction(transaction)) {
      this.transactions.push(transaction)

      // this.logger.debug('Injected a new transaction.')
    } else {
      throw new Error('Transaction type unknown.')
    }
  }

  /**
   * Run all the transactions and rollback all if one has failed.
   * This will run initial transactions and wait for the result,
   */
  public async run (): Promise<GetTransactionType<Event, Map>> {
    this.logger.debug('Creating new instance of transactions.')

    // reset results
    this.results = {} as GetTransactionType<Event, Map>

    // create new query runner and transaction
    const queryRunner = this.connection.createQueryRunner()

    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      // start a timeout
      const startedAt = Date.now()

      // do the checks before doing anything
      await Promise.all(this.checkBeforeTransaction.map((c) => c.check(queryRunner.manager)))

      // first perform the initial transactions sequentially, did not find any good way to this
      while (this.initialTransactions.length > 0) {
        // check for timeout
        if (Date.now() - startedAt > this.options?.timeout) {
          throw new InternalServerErrorException('Initial transactions timed out.')
        }

        // process the initial transactions
        await Promise.all(
          this.initialTransactions.map(async (t, index) => {
            if (
              // might not have the depends on entry at all
              !t.dependsOn ||
              // might have the depends on entry but the transaction may already be finished
              t.dependsOn.length > 0 && t.dependsOn.every((dependent) => Object.keys(this.results).includes(dependent as string))
            ) {
              if (await this.checkTransactionCondition(t, queryRunner.manager)) {
                const result = await t.transaction(queryRunner.manager, this.results)

                if (t.token) {
                  this.results[t.token] = result
                }
              }

              // remove this transaction on queue
              this.initialTransactions.splice(index, 1)

              // this.logger.debug(`Finished initial transaction: ${t.token}`)
            } else {
              this.logger.debug(`Transaction still depends on others: ${String(t.token)} depends on ${t.dependsOn.join(', ')}`)
            }
          })
        )
      }

      // then run the rest in the parallel
      // this will loop through because while running the transactions more might be added, by my design
      while (this.transactions.length > 0) {
        // check for timeout
        if (Date.now() - startedAt > this.options?.timeout) {
          throw new InternalServerErrorException('Transactions timed out.')
        }

        // empty this for this count in loop to progress
        this.inProgressTransactions = this.transactions
        // empty the transactions to not process it twice, if new added
        this.transactions = []

        // process the transactions
        await Promise.all(
          this.inProgressTransactions.map(async (t, index) => {
            if (await this.checkTransactionCondition(t, queryRunner.manager)) {
              await t.transaction(queryRunner.manager, this.results)
            }

            // remove the transaction in queue
            this.inProgressTransactions.splice(index, 1)
          })
        )
      }

      // commit all the transactions
      await queryRunner.commitTransaction()

      // we have to do it here as well to throw the error instead of finally
      // you need to release a queryRunner which was manually instantiated
      this.flushTransactions()

      this.logger.debug('Commited transactions.')

      await queryRunner.release()

      return this.results
    } catch (err) {
      this.logger.warn(`Rolling back transactions: ${err}`)

      // since we have errors lets rollback the changes we made
      // this may throw error if it has not reached the start transaction yet
      try {
        // first rollback the actions that are user defined.
        await Promise.all(
          this.rollbackTransactions.map(async (r) => {
            if (await this.checkTransactionCondition(r, queryRunner.manager)) {
              try {
                await r.rollback(this.results)
              } catch (e) {
                this.logger.error(e)
              }
            }
          })
        )
      } catch (e) {
        this.logger.error(e)
      }

      // then rollback transactions in the database
      try {
        await queryRunner.rollbackTransaction()
      } catch (e) {
        this.logger.error(e)
      }

      try {
        await queryRunner.release()
      } catch (e) {
        this.logger.error(e)
      }

      // we have to do it here as well to throw the error instead of finally
      // you need to release a queryRunner which was manually instantiated
      this.flushTransactions()

      // throw error to catch it with the exception filter instead of handling it
      throw err
    }
  }

  private async checkTransactionCondition (
    transaction: InitialTransaction<Event, Map> | ParallelTransaction<Event, Map> | RollbackTransaction<Event, Map>,
    manager: EntityManager
  ): Promise<boolean> {
    if (typeof transaction?.condition !== 'undefined') {
      const result = await transaction.condition(manager, this.results)

      if (typeof result === 'object') {
        if (result.condition === false) {
          this.logger.debug(`Transaction does not meet the condition, therefore skipping: ${result.message}`)
        }

        return result.condition
      } else {
        return result
      }
    }

    return true
  }

  private flushTransactions (): void {
    this.checkBeforeTransaction = []
    this.initialTransactions = []
    this.transactions = []
    this.inProgressTransactions = []
    this.rollbackTransactions = []
  }

  // custom typeguards to determine the type of transaction

  private hasCheckBeforeTransaction (transaction: any): boolean {
    return 'check' in transaction
  }

  private hasRollback (transaction: any): boolean {
    return 'rollback' in transaction
  }

  private isInitialTransaction (transaction: any): transaction is InitialTransaction<Event, Map> {
    return ('token' in transaction || 'dependsOn' in transaction) && 'transaction' in transaction
  }

  private isParallelTransaction (transaction: any): transaction is ParallelTransaction<Event, Map> {
    return !('token' in transaction) && !('dependsOn' in transaction) && 'transaction' in transaction
  }
}
