# Type alias: GetTransactionType<E, M\>

Ƭ **GetTransactionType**<`E`, `M`\>: `E` extends keyof `M` ? `M`[`E`] : `never`

Get the type of the transaction manager given the map and keys

#### Type parameters

| Name | Type                                           |
| :--- | :--------------------------------------------- |
| `E`  | extends `string`                               |
| `M`  | extends `Partial`<`Record`<`string`, `any`\>\> |

#### Defined in

transactions-manager.interface.ts:62
