import { Injectable, InternalServerErrorException, Logger, Scope } from '@nestjs/common'
import { InjectConnection } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

import {
  CheckBeforeTransaction,
  GetTransactionType,
  InitialTransaction,
  ParallelTransaction,
  RollbackTransaction,
  TransactionManagerOptions
} from './transactions-manager.interface'

@Injectable({ scope: Scope.REQUEST })
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
    timeout: 60 * 1
  }

  constructor (@InjectConnection() private connection: Connection) {}

  /**
   * Sometimes the scope.request is just too much to isolate transactions, there you can create a custom instance for injecting to events or such.
   *
   * @template ChildEvent
   * @template ChildMap
   * @param {Connection} connection
   * @returns  {TransactionsManager<ChildEvent, ChildMap>}
   * @memberof TransactionsManager
   */
  public createChildInstance<ChildEvent extends string = Event, ChildMap extends Partial<Record<ChildEvent, any>> = Partial<Record<ChildEvent, any>>>(): TransactionsManager<
  ChildEvent,
  ChildMap
  > {
    return new TransactionsManager<ChildEvent, ChildMap>(this.connection)
  }

  /**
   * Add a new transaction or rollback.
   * Transactions with token are initial transactions and will get their result saved for further use.
   * Transactions without any depends on and token are parallel transactions that will execute after the initial ones.
   * Rollback transactions will get executed if something goes wrong.
   *
   * @param transaction
   */
  public add (transaction: (ParallelTransaction<Event, Map> | InitialTransaction<Event, Map> | RollbackTransaction<Event, Map>) & Partial<CheckBeforeTransaction>): void {
    if (this.hasCheckBeforeTransaction(transaction)) {
      this.checkBeforeTransaction.push({ check: transaction.check })

      // this.logger.debug('Added a new check before transactions.')
    }

    if (this.isInitialTransaction(transaction)) {
      this.initialTransactions.push(transaction)

      // this.logger.debug('Injected a new transaction.')
    } else if (this.isParallelTransaction(transaction)) {
      this.transactions.push(transaction)

      // this.logger.debug(`Injected a new initial transaction with token ${transaction.token}.`)
    } else if (this.isRollbackTransaction(transaction)) {
      this.rollbackTransactions.push(transaction)

      // this.logger.debug('Injected a new rollback transaction.')
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
              this.results[t.token] = await t.transaction(queryRunner.manager, this.results)

              // remove this transaction on queue
              this.initialTransactions.splice(index, 1)

              // this.logger.debug(`Finished initial transaction: ${t.token}`)
            } else {
              this.logger.debug(`Transaction still depends on others: ${t.token} depends on ${t.dependsOn.join(', ')}`)
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
          this.inProgressTransactions.map(async (f, index) => {
            await f.transaction(queryRunner.manager, this.results)

            // remove the transaction in queue
            this.inProgressTransactions.splice(index, 1)
          })
        )
      }

      // commit all the transactions
      await queryRunner.commitTransaction()

      // we have to do it here as well to throw the error instead of finally
      // you need to release a queryRunner which was manually instantiated
      this.checkBeforeTransaction = []
      this.initialTransactions = []
      this.transactions = []
      this.inProgressTransactions = []
      this.rollbackTransactions = []

      this.logger.debug('Commited transactions.')

      await queryRunner.release()

      return this.results
    } catch (err) {
      this.logger.warn(`Rolling back transactions: ${err}`)

      // we have to do it here as well to throw the error instead of finally
      // you need to release a queryRunner which was manually instantiated
      this.checkBeforeTransaction = []
      this.initialTransactions = []
      this.transactions = []
      this.inProgressTransactions = []
      this.rollbackTransactions = []

      // since we have errors lets rollback the changes we made
      // this may throw error if it has not reached the start transaction yet
      try {
        // first rollback the actions that are user defined.
        await Promise.all(this.rollbackTransactions.map((r) => r.rollback(this.results)))
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

      // throw error to catch it with the exception filter instead of handling it
      throw err
    }
  }

  // custom typeguards to determine the type of transaction

  private hasCheckBeforeTransaction (transaction: any): boolean {
    return 'check' in transaction
  }

  private isInitialTransaction (transaction: any): transaction is InitialTransaction<Event, Map> {
    return 'token' in transaction && 'transaction' in transaction
  }

  private isParallelTransaction (transaction: any): transaction is ParallelTransaction<Event, Map> {
    return !('token' in transaction) && !('dependsOn' in transaction) && 'transaction' in transaction
  }

  private isRollbackTransaction (transaction: any): transaction is RollbackTransaction<Event, Map> {
    return 'rollback' in transaction
  }
}
