# Interface: InitialTransaction<E, M\>

A type of initial transaction, which will run first and can return a result.

## Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `E`  | extends `string`                          |
| `M`  | extends `Partial`<`Record`<`E`, `any`\>\> |

## Hierarchy

- [`BaseTransaction`](BaseTransaction.md)<`E`, `M`\>

  ↳ **`InitialTransaction`**

## Properties

### condition

• `Optional` **condition**: [`Transaction`](../types/Transaction.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, `boolean` \| { `condition`: `boolean` ; `message`: `string` }\>

#### Inherited from

[BaseTransaction](BaseTransaction.md).[condition](BaseTransaction.md#condition)

#### Defined in

transactions-manager.interface.ts:27

---

### token

• **token**: keyof [`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>

#### Defined in

transactions-manager.interface.ts:41

---

### transaction

• **transaction**: [`Transaction`](../types/Transaction.md)<[`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>, [`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>[keyof [`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>]\>

#### Defined in

transactions-manager.interface.ts:42

---

### dependsOn

• `Optional` **dependsOn**: keyof [`GetTransactionType`](../types/GetTransactionType.md)<`E`, `M`\>[]

#### Defined in

transactions-manager.interface.ts:43
