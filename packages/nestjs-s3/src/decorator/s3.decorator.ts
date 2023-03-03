import { Inject } from '@nestjs/common'

import { S3_INSTANCE } from '../s3.constants'

export function InjectS3Service (): PropertyDecorator {
  return Inject(S3_INSTANCE)
}
