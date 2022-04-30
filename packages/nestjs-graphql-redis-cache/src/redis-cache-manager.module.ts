import type { DynamicModule, CacheModuleOptions } from '@nestjs/common'
import { CacheModule, CACHE_MANAGER, Global, Module } from '@nestjs/common'
import { ConfigService } from '@webundsoehne/nestjs-util/dist/provider/config/config.service'
import * as redisStore from 'cache-manager-ioredis'

import type { RedisCacheManagerOptions } from './redis-cache-manager.interface'

@Global()
@Module({
  imports: [
    CacheModule.register({
      ...ConfigService.get<CacheModuleOptions>('redisCacheManager'),
      store: redisStore
    })
  ],
  exports: [ CacheModule ]
})
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
              ...options?.options ?? {
                ...ConfigService.get<CacheModuleOptions>('redisCacheManager')
              },
              store: redisStore
            })
        }
      ],
      exports: [ CACHE_MANAGER ]
    }
  }
}
