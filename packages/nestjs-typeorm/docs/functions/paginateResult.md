# Function: paginateResult

▸ **paginateResult**<`T`\>(`__namedParameters`): [`PaginatedResult`](../interfaces/PaginatedResult.md)<`T`\>

Paginate an existing result.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                | Type                                        |
| :------------------ | :------------------------------------------ |
| `__namedParameters` | `PaginationOutputDto` & { `result`: `T`[] } |

#### Returns

[`PaginatedResult`](../interfaces/PaginatedResult.md)<`T`\>

#### Defined in

utils/pagination.util.ts:45
