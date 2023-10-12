import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { REDIS_STORE_DELIMITER, REDIS_STORE_INSTANCE } from './redis-store.constants'
import type { RedisStoreModuleOptions } from './redis-store.interface'
import { RedisStoreService } from './redis-store.service'

@Module({})
export class RedisStoreModule {
  public static forRoot (options?: RedisStoreModuleOptions): DynamicModule {
    const token = options?.token ?? REDIS_STORE_INSTANCE

    return {
      global: options?.global ?? true,
      module: RedisStoreModule,
      providers: [
        {
          provide: token,
          useFactory: (): RedisStoreService =>
            new RedisStoreService({
              delimiter: options?.delimiter ?? REDIS_STORE_DELIMITER,
              options: options?.options
            })
        }
      ],
      exports: [ token ]
    }
  }
}
