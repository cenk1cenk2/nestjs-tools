import { DynamicModule, CacheModule, CACHE_MANAGER, Global, Module, CacheModuleOptions } from '@nestjs/common'
import * as redisStore from 'cache-manager-ioredis'

import { RedisCacheManagerOptions } from './redis-cache-manager.interface'
import { ConfigService } from '@webundsoehne/nestjs-util/dist/provider/config/config.service'

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
  static forRoot (options: RedisCacheManagerOptions): DynamicModule {
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
