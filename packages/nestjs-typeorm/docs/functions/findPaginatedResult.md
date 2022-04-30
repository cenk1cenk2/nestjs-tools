# Function: findPaginatedResult

▸ **findPaginatedResult**<`T`\>(`repository`, `__namedParameters`, `options?`): `Promise`<[`PaginatedResult`](../interfaces/PaginatedResult.md)<`T`\>\>

Find a paginated result via typeorm with find and count.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                | Type                    |
| :------------------ | :---------------------- |
| `repository`        | `Repository`<`T`\>      |
| `__namedParameters` | `PaginationInputDto`    |
| `options?`          | `FindManyOptions`<`T`\> |

#### Returns

`Promise`<[`PaginatedResult`](../interfaces/PaginatedResult.md)<`T`\>\>

#### Defined in

utils/pagination.util.ts:10
