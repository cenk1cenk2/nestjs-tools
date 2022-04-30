# Type alias: WithTransactionManager<E, M\>

Ƭ **WithTransactionManager**<`E`, `M`\>: `E` extends keyof `M` ? { `transactions`: [`TransactionsManager`](../classes/TransactionsManager.md)<`E`, `M`\> } : { `transactions`: [`TransactionsManager`](../classes/TransactionsManager.md)<`any`, `any`\> }

Get the transaction type to use with events

#### Type parameters

| Name | Type                                                                                    |
| :--- | :-------------------------------------------------------------------------------------- |
| `E`  | extends `string` = `string`                                                             |
| `M`  | extends `Partial`<`Record`<`string`, `any`\>\> = `Partial`<`Record`<`string`, `any`\>\> |

#### Defined in

transactions-manager.interface.ts:68
