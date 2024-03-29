import type { EntityManager } from 'typeorm'

import type { TransactionsManager } from './transactions-manager.service'

/**
 * A singular transaction.
 */
export type Transaction<T, R> = (manager: EntityManager, results?: T) => R | Promise<R>

/**
 * A singular rollback.
 */
export type Rollback<T, R> = (results?: T) => R | Promise<R>

/**
 * The type of parallel transactions which will be run after.
 */
// made this an object too, to refactor fast between initial and parallel transaction
export interface CheckBeforeTransaction {
  check: Transaction<never, void>
}

/**
 * A condition to run this transaction.
 */
export interface BaseTransaction<E extends string, M extends Partial<Record<E, any>>> {
  condition?: Transaction<GetTransactionType<E, M>, boolean | { condition: boolean, message: string }>
}

/**
 * The type of parallel transactions which will be run after.
 */
export interface ParallelTransaction<E extends string, M extends Partial<Record<E, any>>> extends BaseTransaction<E, M> {
  transaction: Transaction<GetTransactionType<E, M>, void>
}

/**
 * A type of initial transaction, which will run first and can return a result.
 */
export interface InitialTransaction<E extends string, M extends Partial<Record<E, any>>> extends BaseTransaction<E, M> {
  token: keyof GetTransactionType<E, M>
  transaction: Transaction<GetTransactionType<E, M>, GetTransactionType<E, M>[keyof GetTransactionType<E, M>]>
  dependsOn?: (keyof GetTransactionType<E, M>)[]
}

/**
 * A transaction rollback action.
 *
 * @export
 * @interface RollbackTransactions
 * @template E
 * @template M
 */
export interface RollbackTransaction<E extends string, M extends Partial<Record<E, any>>> extends BaseTransaction<E, M> {
  rollback: Rollback<GetTransactionType<E, M>, void>
}

/**
 * Get the type of the transaction manager given the map and keys
 */
// this is a partial of any object since we want to make properties optional if we dont do this it will go mad
export type GetTransactionType<E extends string, M extends Partial<Record<string, any>>> = E extends keyof M ? M[E] : never

/**
 * Get the transaction type to use with events
 */
// this is a partial of any object since we want to make properties optional if we dont do this it will go mad
export type WithTransactionManager<E extends string = string, M extends Partial<Record<string, any>> = Partial<Record<string, any>>> = E extends keyof M
  ? {
    transactions: TransactionsManager<E, M>
  }
  : {
    transactions: TransactionsManager<any, any>
  }

/**
 * For fast typing the event map.
 */
export type TransactionMap<Events extends string> = Partial<Record<Events, any>>

/**
 * Give transaction map a set of indexes to not make it go crazy when some events are missing from it.
 * They are optional after all.
 */
export class BaseTransactionMap {
  [k: string]: any
}

/**
 * Some options for the service itself.
 */
export interface TransactionManagerOptions {
  timeout?: number
}
