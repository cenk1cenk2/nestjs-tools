import { Global, Module, DynamicModule } from '@nestjs/common'
import { RedisOptions } from 'ioredis'

import { REDIS_PUBSUB_INSTANCE, REDIS_PUBSUB_DELIMITER } from './redis-pubsub.constants'
import { RedisPubSubModuleOptions } from './redis-pubsub.interface'
import { RedisPubSubService } from './redis-pubsub.service'
import { ConfigService } from '@webundsoehne/nestjs-util/dist/provider/config/config.service'

@Global()
@Module({
  providers: [
    {
      provide: REDIS_PUBSUB_INSTANCE,
      useFactory: (): RedisPubSubService<any, any> =>
        new RedisPubSubService({
          delimiter: REDIS_PUBSUB_DELIMITER,
          options: {
            connection: ConfigService.get<RedisOptions>('redisPubSub')
          }
        })
    }
  ],
  exports: [ REDIS_PUBSUB_INSTANCE ]
})
export class RedisPubSubModule {
  public static forRoot (options?: RedisPubSubModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisPubSubModule,
      providers: [
        {
          provide: REDIS_PUBSUB_INSTANCE,
          useFactory: (): RedisPubSubService<any, any> =>
            new RedisPubSubService({
              delimiter: options?.delimiter ?? REDIS_PUBSUB_DELIMITER,
              options: {
                ...options?.options ?? {
                  connection: ConfigService.get<RedisOptions>('redisPubSub')
                }
              }
            })
        }
      ],
      exports: [ REDIS_PUBSUB_INSTANCE ]
    }
  }
}
