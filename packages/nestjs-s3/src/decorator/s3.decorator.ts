import { Inject } from '@nestjs/common'

import { S3_INSTANCE } from '../s3.constants'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectS3Service () {
  return Inject(S3_INSTANCE)
}
