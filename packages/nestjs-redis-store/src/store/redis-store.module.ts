import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { REDIS_STORE_DELIMITER, REDIS_STORE_INSTANCE } from './redis-store.constants'
import type { RedisStoreModuleOptions } from './redis-store.interface'
import { RedisStoreService } from './redis-store.service'

@Global()
@Module({})
export class RedisStoreModule {
  public static forRoot (options?: RedisStoreModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisStoreModule,
      providers: [
        {
          provide: REDIS_STORE_INSTANCE,
          useFactory: (): RedisStoreService =>
            new RedisStoreService({
              delimiter: options?.delimiter ?? REDIS_STORE_DELIMITER,
              options: options?.options
            })
        }
      ],
      exports: [ REDIS_STORE_INSTANCE ]
    }
  }
}
