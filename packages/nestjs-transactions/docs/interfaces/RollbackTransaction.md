# Interface: RollbackTransaction<E, M\>

A transaction rollback action.

**`Export`**

**`Interface`**

RollbackTransactions

## Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `E`  | extends `string`                          |
| `M`  | extends `Partial`<`Record`<`E`, `any`\>\> |

## Hierarchy

- [`BaseTransaction`](BaseTransaction.md)<`E`, `M`\>

  ↳ **`RollbackTransaction`**

## Properties

### condition

• `Optional` **condition**: [`Transaction`](../types/Transaction.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, `boolean` \| { `condition`: `boolean` ; `message`: `string` }\>

#### Inherited from

[BaseTransaction](BaseTransaction.md).[condition](BaseTransaction.md#condition)

#### Defined in

transactions-manager.interface.ts:27

---

### rollback

• **rollback**: [`Rollback`](../types/Rollback.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, `void`\>

#### Defined in

transactions-manager.interface.ts:55
