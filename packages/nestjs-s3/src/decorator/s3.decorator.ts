import { Inject } from '@nestjs/common'

import { S3_INSTANCE } from '../s3.constants'

export function InjectS3Service (): (target: Record<string, unknown>, key: string | symbol, index?: number) => void {
  return Inject(S3_INSTANCE)
}
