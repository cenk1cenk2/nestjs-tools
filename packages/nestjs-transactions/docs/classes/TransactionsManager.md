# Class: TransactionsManager<Event, Map\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends `string` = `string` |
| `Map` | extends `Partial`<`Record`<`Event`, `any`\>\> = `Partial`<`Record`<`Event`, `any`\>\> |

## Properties

### transactions

• `Private` **transactions**: [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:17

___

### checkBeforeTransaction

• `Private` **checkBeforeTransaction**: [`CheckBeforeTransaction`](../interfaces/CheckBeforeTransaction.md)[] = `[]`

#### Defined in

transactions-manager.service.ts:18

___

### inProgressTransactions

• `Private` **inProgressTransactions**: [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:19

___

### initialTransactions

• `Private` **initialTransactions**: [`InitialTransaction`](../interfaces/InitialTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:20

___

### rollbackTransactions

• `Private` **rollbackTransactions**: [`RollbackTransaction`](../interfaces/RollbackTransaction.md)<`Event`, `Map`\>[] = `[]`

#### Defined in

transactions-manager.service.ts:21

___

### results

• `Private` **results**: [`GetTransactionType`](../types/GetTransactionType.md)<`Event`, `Map`\>

#### Defined in

transactions-manager.service.ts:22

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

transactions-manager.service.ts:23

___

### options

• `Private` **options**: [`TransactionManagerOptions`](../interfaces/TransactionManagerOptions.md)

#### Defined in

transactions-manager.service.ts:25

___

### connection

• `Private` **connection**: `Connection`

#### Defined in

transactions-manager.service.ts:30

## Constructors

### constructor

• **new TransactionsManager**<`Event`, `Map`\>(`connection`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends `string` = `string` |
| `Map` | extends `Partial`<`Record`<`Event`, `any`\>\> = `Partial`<`Record`<`Event`, `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |

#### Defined in

transactions-manager.service.ts:30

## Methods

### createChild

▸ **createChild**<`ChildEvent`\>(): [`TransactionsManager`](TransactionsManager.md)<`ChildEvent`, `Map`\>

Sometimes the scope.request is just too much to isolate transactions, there you can create a custom instance for injecting to events or such.

**`Memberof`**

TransactionsManager

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ChildEvent` | extends `string` |

#### Returns

[`TransactionsManager`](TransactionsManager.md)<`ChildEvent`, `Map`\>

#### Defined in

transactions-manager.service.ts:39

___

### add

▸ **add**(`transaction`): `void`

Add a new transaction, with optional check or rollback.
Checks will be executed before any transactions to check whether the operation is performable.
Transactions with token are initial transactions and will get their result saved for further use.
Transactions without any depends on and token are parallel transactions that will execute after the initial ones.
Rollback transactions will get executed if something goes wrong.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |

#### Returns

`void`

#### Defined in

transactions-manager.service.ts:52

___

### run

▸ **run**(): `Promise`<[`GetTransactionType`](../types/GetTransactionType.md)<`Event`, `Map`\>\>

Run all the transactions and rollback all if one has failed.
This will run initial transactions and wait for the result,

#### Returns

`Promise`<[`GetTransactionType`](../types/GetTransactionType.md)<`Event`, `Map`\>\>

#### Defined in

transactions-manager.service.ts:86

___

### checkTransactionCondition

▸ `Private` **checkTransactionCondition**(`transaction`, `manager`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`ParallelTransaction`](../interfaces/ParallelTransaction.md)<`Event`, `Map`\> \| [`InitialTransaction`](../interfaces/InitialTransaction.md)<`Event`, `Map`\> \| [`RollbackTransaction`](../interfaces/RollbackTransaction.md)<`Event`, `Map`\> |
| `manager` | `EntityManager` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

transactions-manager.service.ts:222

___

### flushTransactions

▸ `Private` **flushTransactions**(): `void`

#### Returns

`void`

#### Defined in

transactions-manager.service.ts:243

___

### hasCheckBeforeTransaction

▸ `Private` **hasCheckBeforeTransaction**(`transaction`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

`boolean`

#### Defined in

transactions-manager.service.ts:253

___

### hasRollback

▸ `Private` **hasRollback**(`transaction`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

`boolean`

#### Defined in

transactions-manager.service.ts:257

___

### isInitialTransaction

▸ `Private` **isInitialTransaction**(`transaction`): transaction is InitialTransaction<Event, Map\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

transaction is InitialTransaction<Event, Map\>

#### Defined in

transactions-manager.service.ts:261

___

### isParallelTransaction

▸ `Private` **isParallelTransaction**(`transaction`): transaction is ParallelTransaction<Event, Map\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

transaction is ParallelTransaction<Event, Map\>

#### Defined in

transactions-manager.service.ts:265
