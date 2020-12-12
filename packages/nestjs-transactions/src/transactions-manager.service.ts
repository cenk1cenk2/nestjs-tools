import { Injectable, Logger, Scope, InternalServerErrorException } from '@nestjs/common'
import { InjectConnection } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

import {
  InitialTransaction,
  ParallelTransaction,
  GetTransactionType,
  TransactionManagerOptions
} from './transactions-manager.interface'

@Injectable({ scope: Scope.REQUEST })
export class TransactionsManager<
  Event extends string = string,
  Map extends Partial<Record<Event, any>> = Partial<Record<Event, any>>
> {
  private transactions: ParallelTransaction<Event, Map>[] = []
  private inProgressTransactions: ParallelTransaction<Event, Map>[] = []
  private initialTransactions: InitialTransaction<Event, Map>[] = []
  private results: GetTransactionType<Event, Map> = {} as GetTransactionType<Event, Map>
  private logger: Logger = new Logger(this.constructor.name)
  // do not need to create a dynamic module for now, will hardcode the options
  private options: TransactionManagerOptions = {
    // transaction timeout in 1 minute, should be enough
    timeout: 60 * 1
  }

  constructor (@InjectConnection() private connection: Connection) {}

  /**
   * Add a new transaction which will execute asynchronously.
   * @param transaction
   */
  public add (transaction: ParallelTransaction<Event, Map>): void {
    this.transactions.push(transaction)

    // this.logger.debug('Injected a new transaction.')
  }

  /**
   * Add an initial transaction where you can map the result to a key.
   * @param token
   * @param transaction
   */
  public addInitial (transaction: InitialTransaction<Event, Map>): void {
    this.initialTransactions.push(transaction)

    // this.logger.debug(`Injected a new preliminary transaction with token: ${transaction.token}`)
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
              t.dependsOn.length > 0 &&
                t.dependsOn.every((dependent) => Object.keys(this.results).includes(dependent as string))
            ) {
              // run the transaction
              if (t.token) {
                this.results[t.token] = await t.transaction(queryRunner.manager, this.results)
              } else {
                await t.transaction(queryRunner.manager, this.results)
              }

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
      this.initialTransactions = []
      this.transactions = []
      this.inProgressTransactions = []

      this.logger.debug('Commited transactions.')

      await queryRunner.release()

      return this.results
    } catch (err) {
      // since we have errors lets rollback the changes we made
      // this may throw error if it has not reached the start transaction yet
      try {
        await queryRunner.rollbackTransaction()
      } catch (e) {
        this.logger.error(e)
      }

      // we have to do it here as well to throw the error instead of finally
      // you need to release a queryRunner which was manually instantiated
      this.initialTransactions = []
      this.transactions = []
      this.inProgressTransactions = []

      await queryRunner.release()

      this.logger.warn(`Rolling back transactions: ${err}`)

      // throw error to catch it with the exception filter instead of handling it
      throw err
    }
  }
}
