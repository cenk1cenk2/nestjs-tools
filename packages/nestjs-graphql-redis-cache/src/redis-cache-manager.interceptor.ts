import { CACHE_TTL_METADATA } from '@nestjs/cache-manager'
import type { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common'
import { Injectable, Logger } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import type { Observable } from 'rxjs'
import { of } from 'rxjs'
import { tap } from 'rxjs/operators'

import { InjectRedisCacheManager } from './decorator/inject.decorator'
import { REDIS_CACHE_MANAGER_DELIMITER } from './redis-cache-manager.constants'
import { type RedisCacheManagerProvider } from './redis-cache-manager.interface'

@Injectable()
export class RedisCacheManagerGraphlQLInterceptor implements NestInterceptor {
  private logger = new Logger()

  constructor (
    @InjectRedisCacheManager() private cache: RedisCacheManagerProvider,
    protected readonly reflector: Reflector
  ) {}

  public async intercept (context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention
    const [ _u, args, _s, field ] = context.getArgs()

    const ttl = this.reflector.get<number>(CACHE_TTL_METADATA, context.getHandler())

    const stringifyedArgs = JSON.stringify(args)

    const key = this.createTopic(field.fieldName, stringifyedArgs)

    const cached = await this.cache.get(key)

    if (cached) {
      this.logger.debug(`Using cache for GraphQL: ${key}`)

      return of(cached)
    }

    return next.handle().pipe(tap((data) => this.cache.set(key, data, ttl)))
  }

  public createTopic (...pattern: string[]): string {
    return pattern.join(REDIS_CACHE_MANAGER_DELIMITER)
  }
}
