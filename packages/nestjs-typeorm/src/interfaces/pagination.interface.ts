import { PaginationOutputDto } from '@cenk1cenk2/nestjs-utils'

/**
 * Pagination result for typing the functions.
 */
export interface PaginatedResult<T> {
  result: T[]
  pagination: PaginationOutputDto
}
