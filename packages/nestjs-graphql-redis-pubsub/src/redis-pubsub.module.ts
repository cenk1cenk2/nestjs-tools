import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { REDIS_PUBSUB_DELIMITER, REDIS_PUBSUB_INSTANCE } from './redis-pubsub.constants'
import type { RedisPubSubModuleOptions } from './redis-pubsub.interface'
import { RedisPubSubService } from './redis-pubsub.service'

@Global()
@Module({})
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
              options: options?.options
            })
        }
      ],
      exports: [ REDIS_PUBSUB_INSTANCE ]
    }
  }
}
