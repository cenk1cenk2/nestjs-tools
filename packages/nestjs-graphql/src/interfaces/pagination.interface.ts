import type { Type } from '@nestjs/common/interfaces/type.interface'
import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsNumber, IsObject, IsOptional, IsPositive } from 'class-validator'

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

/**
 * Pagination result for typing the functions.
 */
export interface PaginatedResult<T> {
  result: T[]
  pagination: PaginationOutputDto
}

// arguments to take as input
@InputType()
export class PaginationArgsInput implements PaginationInputDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Field(() => Int, { defaultValue: 10 })
    limit: number

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Field(() => Int, { defaultValue: 1 })
    page: number
}

/**
 * Input arguments for doing a pagination on multiple entries.
 */
@ArgsType()
export class PaginationArgs {
  @IsObject()
  @IsOptional()
  @Field(() => PaginationArgsInput, { nullable: true, defaultValue: { limit: 10, page: 1 } })
    pagination?: PaginationArgsInput
}

@ObjectType()
export class PaginationOutput implements PaginationOutputDto {
  @Field(() => Int)
    limit: number

  @Field(() => Int)
    page: number

  @Field(() => Int)
    total: number
}

/**
 * Paginate given output interface for graphql.
 * @param classRef
 */
export function Paginated<T> (classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class Page {
    @Field(() => [ classRef ], { nullable: 'items' })
      result: T[]

    @Field(() => PaginationOutput)
      pagination: PaginationOutput
  }

  return Page
}
