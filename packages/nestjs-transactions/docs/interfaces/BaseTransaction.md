# Interface: BaseTransaction<E, M\>

A condition to run this transaction.

## Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `E`  | extends `string`                          |
| `M`  | extends `Partial`<`Record`<`E`, `any`\>\> |

## Hierarchy

- **`BaseTransaction`**

  ↳ [`ParallelTransaction`](ParallelTransaction.md)

  ↳ [`InitialTransaction`](InitialTransaction.md)

  ↳ [`RollbackTransaction`](RollbackTransaction.md)

## Properties

### condition

• `Optional` **condition**: [`Transaction`](../types/Transaction.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, `boolean` \| { `condition`: `boolean` ; `message`: `string` }\>

#### Defined in

transactions-manager.interface.ts:27
