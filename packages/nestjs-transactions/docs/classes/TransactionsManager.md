# Class: TransactionsManager<Event, Map\>

## Type parameters

| Name    | Type                                                                                  |
| :------ | :------------------------------------------------------------------------------------ |
| `Event` | extends `string` = `string`                                                           |
| `Map`   | extends `Partial`<`Record`<`Event`, `any`\>\> = `Partial`<`Record`<`Event`, `any`\>\> |

## Properties

### transactions

• `Private` **transactions**: [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:17

---

### checkBeforeTransaction

• `Private` **checkBeforeTransaction**: [`CheckBeforeTransaction`](../interfaces/CheckBeforeTransaction.md)[] = `[]`

#### Defined in

transactions-manager.service.ts:18

---

### inProgressTransactions

• `Private` **inProgressTransactions**: [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:19

---

### initialTransactions

• `Private` **initialTransactions**: [`InitialTransaction`](../interfaces/InitialTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:20

---

### rollbackTransactions

• `Private` **rollbackTransactions**: [`RollbackTransaction`](../interfaces/RollbackTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:21

---

### results

• `Private` **results**: [`GetTransactionType`](../types/GetTransactionType.md)<`Event`, `Map`\>

#### Defined in

transactions-manager.service.ts:22

---

### logger

• `Private` **logger**: `Logger`

#### Defined in

transactions-manager.service.ts:23

---

### options

• `Private` **options**: [`TransactionManagerOptions`](../interfaces/TransactionManagerOptions.md)

#### Defined in

transactions-manager.service.ts:25

## Constructors

### constructor

• **new TransactionsManager**<`Event`, `Map`\>(`connection`)

#### Type parameters

| Name    | Type                                                                                  |
| :------ | :------------------------------------------------------------------------------------ |
| `Event` | extends `string` = `string`                                                           |
| `Map`   | extends `Partial`<`Record`<`Event`, `any`\>\> = `Partial`<`Record`<`Event`, `any`\>\> |

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `connection` | `Connection` |

## Methods

### createChild

▸ **createChild**<`ChildEvent`\>(): [`TransactionsManager`](TransactionsManager.md)<`ChildEvent`, `Map`\>

Sometimes the scope.request is just too much to isolate transactions, there you can create a custom instance for injecting to events or such.

**`Memberof`**

TransactionsManager

#### Type parameters

| Name         | Type             |
| :----------- | :--------------- |
| `ChildEvent` | extends `string` |

#### Returns

[`TransactionsManager`](TransactionsManager.md)<`ChildEvent`, `Map`\>

---

### add

▸ **add**(`transaction`): `void`

Add a new transaction, with optional check or rollback. Checks will be executed before any transactions to check whether the operation is performable. Transactions with token are initial transactions and will get their result saved for further use. Transactions without any depends on and token are parallel transactions that will execute after the initial ones. Rollback transactions will get executed if something goes wrong.

#### Parameters

| Name | Type |
| :-- | :-- |
| `transaction` | [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\> & `Partial`<[`CheckBeforeTransaction`](../interfaces/CheckBeforeTransaction.md) & [`RollbackTransaction`](../interfaces/RollbackTransaction.md)<`Event`, `Map`\>\> & [`InitialTransaction`](../interfaces/InitialTransaction.md)<`Event`, `Map`\> & `Partial`<[`CheckBeforeTransaction`](../interfaces/CheckBeforeTransaction.md) & [`RollbackTransaction`](../interfaces/RollbackTransaction.md)<`Event`, `Map`\>\> |

#### Returns

`void`

---

### run

▸ **run**(): `Promise`<[`GetTransactionType`](../types/GetTransactionType.md)<`Event`, `Map`\>\>

Run all the transactions and rollback all if one has failed. This will run initial transactions and wait for the result,

#### Returns

`Promise`<[`GetTransactionType`](../types/GetTransactionType.md)<`Event`, `Map`\>\>

---

### checkTransactionCondition

▸ `Private` **checkTransactionCondition**(`transaction`, `manager`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :-- | :-- |
| `transaction` | [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\> \| [`InitialTransaction`](../interfaces/InitialTransaction.md)<`Event`, `Map`\> \| [`RollbackTransaction`](../interfaces/RollbackTransaction.md)<`Event`, `Map`\> |
| `manager` | `EntityManager` |

#### Returns

`Promise`<`boolean`\>

---

### flushTransactions

▸ `Private` **flushTransactions**(): `void`

#### Returns

`void`

---

### hasCheckBeforeTransaction

▸ `Private` **hasCheckBeforeTransaction**(`transaction`): `boolean`

#### Parameters

| Name          | Type  |
| :------------ | :---- |
| `transaction` | `any` |

#### Returns

`boolean`

---

### hasRollback

▸ `Private` **hasRollback**(`transaction`): `boolean`

#### Parameters

| Name          | Type  |
| :------------ | :---- |
| `transaction` | `any` |

#### Returns

`boolean`

---

### isInitialTransaction

▸ `Private` **isInitialTransaction**(`transaction`): transaction is InitialTransaction<Event, Map\>

#### Parameters

| Name          | Type  |
| :------------ | :---- |
| `transaction` | `any` |

#### Returns

transaction is InitialTransaction<Event, Map\>

---

### isParallelTransaction

▸ `Private` **isParallelTransaction**(`transaction`): transaction is ParallelTransaction<Event, Map\>

#### Parameters

| Name          | Type  |
| :------------ | :---- |
| `transaction` | `any` |

#### Returns

transaction is ParallelTransaction<Event, Map\>
