import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { ConfigService } from '@webundsoehne/nestjs-util/dist/provider/config/config.service'
import type { RedisOptions } from 'ioredis'

import { REDIS_STORE_INSTANCE, REDIS_STORE_DELIMITER } from './redis-store.constants'
import type { RedisPubSubModuleOptions } from './redis-store.interface'
import { RedisStoreService } from './redis-store.service'

@Global()
@Module({
  providers: [
    {
      provide: REDIS_STORE_INSTANCE,
      useFactory: (): RedisStoreService =>
        new RedisStoreService({
          delimiter: REDIS_STORE_DELIMITER,
          options: ConfigService.get<RedisOptions>('redisStore')
        })
    }
  ],
  exports: [ REDIS_STORE_INSTANCE ]
})
export class RedisStoreModule {
  public static forRoot (options?: RedisPubSubModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisStoreModule,
      providers: [
        {
          provide: REDIS_STORE_INSTANCE,
          useFactory: (): RedisStoreService =>
            new RedisStoreService({
              delimiter: options?.delimiter ?? REDIS_STORE_DELIMITER,
              options: options?.options ?? ConfigService.get<RedisOptions>('redisStore')
            })
        }
      ],
      exports: [ REDIS_STORE_INSTANCE ]
    }
  }
}
