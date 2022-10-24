import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { ConfigService } from '@webundsoehne/nestjs-util'

import { REDIS_OM_INSTANCE } from './redis-om.constants'
import type { RedisOmModuleOptions } from './redis-om.interface'
import { RedisOmService } from './redis-om.service'

@Global()
@Module({
  providers: [
    {
      provide: REDIS_OM_INSTANCE,
      useFactory: (): RedisOmService => new RedisOmService(ConfigService.get<RedisOmModuleOptions>('redisOm'))
    }
  ],
  exports: [ REDIS_OM_INSTANCE ]
})
export class RedisOmModule {
  public static forRoot (options?: RedisOmModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: RedisOmModule,
      providers: [
        {
          provide: REDIS_OM_INSTANCE,
          useFactory: (): RedisOmService => new RedisOmService(options)
        }
      ],
      exports: [ REDIS_OM_INSTANCE ]
    }
  }
}
