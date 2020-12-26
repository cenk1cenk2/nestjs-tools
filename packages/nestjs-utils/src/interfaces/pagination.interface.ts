/**
 * Output type for pagination.
 *
 * @export
 * @interface PaginationOutputDto
 * @extends {PaginationInputDto}
 */
export interface PaginationOutputDto extends PaginationInputDto {
  /** Total number of items */
  total: number
}

/**
 * Input type for pagination.
 *
 * @export
 * @interface PaginationInputDto
 */
export interface PaginationInputDto {
  /** Limit the number of items per page. */
  limit: number

  /** Get page number */
  page: number
}
