import { Global, Module, DynamicModule } from '@nestjs/common'
import { RedisOptions } from 'ioredis'

import { REDIS_STORE_INSTANCE, REDIS_STORE_DELIMITER } from './redis-store.constants'
import { RedisPubSubModuleOptions } from './redis-store.interface'
import { RedisStoreService } from './redis-store.service'
import { ConfigService } from '@webundsoehne/nestjs-util/dist/provider/config/config.service'

@Global()
@Module({
  providers: [
    {
      provide: REDIS_STORE_INSTANCE,
      useFactory: (): RedisStoreService<any, any> =>
        new RedisStoreService({
          delimiter: REDIS_STORE_DELIMITER,
          options: ConfigService.get<RedisOptions>('redisStore')
        })
    }
  ],
  exports: [ REDIS_STORE_INSTANCE ]
})
export class RedisStoreModule {
  static forRoot (options?: RedisPubSubModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisStoreModule,
      providers: [
        {
          provide: REDIS_STORE_INSTANCE,
          useFactory: (): RedisStoreService<any, any> =>
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
