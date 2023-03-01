import type { S3ClientConfig } from '@aws-sdk/client-s3'
import { S3Client } from '@aws-sdk/client-s3'
import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { S3_INSTANCE } from './s3.constants'
import type { S3ModuleOptions } from './s3.interface'

@Global()
@Module({})
export class S3Module {
  public static forRoot (options?: S3ModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: S3Module,
      providers: [
        {
          provide: S3_INSTANCE,
          useFactory: (): S3ClientConfig => new S3Client(options?.options)
        }
      ],
      exports: [ S3_INSTANCE ]
    }
  }
}
