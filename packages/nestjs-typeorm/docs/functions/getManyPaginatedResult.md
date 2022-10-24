# Function: getManyPaginatedResult

▸ **getManyPaginatedResult**<`T`\>(`queryBuilder`, `__namedParameters`): `Promise`<[`PaginatedResult`](../interfaces/PaginatedResult.md)<`T`\>\>

Find a paginated result via typeorm with get many and count.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryBuilder` | `SelectQueryBuilder`<`T`\> |
| `__namedParameters` | `PaginationInputDto` |

#### Returns

`Promise`<[`PaginatedResult`](../interfaces/PaginatedResult.md)<`T`\>\>

#### Defined in

utils/pagination.util.ts:28
