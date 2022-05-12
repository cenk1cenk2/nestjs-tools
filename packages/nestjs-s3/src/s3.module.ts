import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { ConfigService } from '@webundsoehne/nestjs-util'
import { S3 } from 'aws-sdk'

import { S3_INSTANCE } from './s3.constants'
import type { S3ModuleOptions } from './s3.interface'

@Global()
@Module({
  providers: [
    {
      provide: S3_INSTANCE,
      useFactory: (): S3 => new S3(ConfigService.get<S3.Types.ClientConfiguration>('s3'))
    }
  ],
  exports: [ S3_INSTANCE ]
})
export class S3Module {
  public static forRoot (options?: S3ModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: S3Module,
      providers: [
        {
          provide: S3_INSTANCE,
          useFactory: (): S3 => new S3(options?.options)
        }
      ],
      exports: [ S3_INSTANCE ]
    }
  }
}
