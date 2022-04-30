import type { FindManyOptions, Repository } from 'typeorm'
import type { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder'

import type { PaginationInputDto, PaginationOutputDto } from '@cenk1cenk2/nestjs-utils'
import type { PaginatedResult } from '@interfaces'

/**
 * Find a paginated result via typeorm with find and count.
 */
export async function findPaginatedResult<T> (repository: Repository<T>, { limit, page }: PaginationInputDto, options?: FindManyOptions<T>): Promise<PaginatedResult<T>> {
  const [ result, total ] = await repository.findAndCount({
    take: limit,
    skip: (page - 1) * limit,
    ...options
  })

  return paginateResult({
    result,
    total,
    limit,
    page
  })
}

/**
 * Find a paginated result via typeorm with get many and count.
 */
export async function getManyPaginatedResult<T> (queryBuilder: SelectQueryBuilder<T>, { limit, page }: PaginationInputDto): Promise<PaginatedResult<T>> {
  const [ result, total ] = await queryBuilder
    .take(limit)
    .skip((page - 1) * limit)
    .getManyAndCount()

  return paginateResult({
    result,
    total,
    limit,
    page
  })
}

/**
 * Paginate an existing result.
 */
export function paginateResult<T> ({ result, total, limit, page }: PaginationOutputDto & { result: T[] }): PaginatedResult<T> {
  return {
    result,
    pagination: {
      limit,
      page,
      total
    }
  }
}
