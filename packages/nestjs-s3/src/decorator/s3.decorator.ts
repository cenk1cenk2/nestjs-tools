import { Inject } from '@nestjs/common'

import { S3_INSTANCE } from '../s3.constants'

export const InjectS3Service: typeof Inject<typeof S3_INSTANCE> = () => {
  return Inject(S3_INSTANCE)
}
