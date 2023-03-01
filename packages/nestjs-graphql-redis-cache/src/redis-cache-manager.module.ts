import type { CacheStore, DynamicModule } from '@nestjs/common'
import { CacheModule, CACHE_MANAGER, Global, Module } from '@nestjs/common'
import * as redisStore from 'cache-manager-ioredis'

import type { RedisCacheManagerOptions } from './redis-cache-manager.interface'

@Global()
@Module({})
export class RedisCacheManagerModule {
  public static forRoot (options: RedisCacheManagerOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisCacheManagerModule,
      providers: [
        {
          provide: CACHE_MANAGER,
          useFactory: (): CacheModule =>
            CacheModule.register({
              ...options?.options,
              store: redisStore as unknown as CacheStore
            })
        }
      ],
      exports: [ CACHE_MANAGER ]
    }
  }
}
