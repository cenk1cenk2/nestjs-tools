# Interface: ParallelTransaction<E, M\>

The type of parallel transactions which will be run after.

## Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `E`  | extends `string`                          |
| `M`  | extends `Partial`<`Record`<`E`, `any`\>\> |

## Hierarchy

- [`BaseTransaction`](BaseTransaction.md)<`E`, `M`\>

  ↳ **`ParallelTransaction`**

## Properties

### condition

• `Optional` **condition**: [`Transaction`](../types/Transaction.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, `boolean` \| { `condition`: `boolean` ; `message`: `string` }\>

#### Inherited from

[BaseTransaction](BaseTransaction.md).[condition](BaseTransaction.md#condition)

#### Defined in

transactions-manager.interface.ts:27

---

### transaction

• **transaction**: [`Transaction`](../types/Transaction.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, `void`\>

#### Defined in

transactions-manager.interface.ts:34
