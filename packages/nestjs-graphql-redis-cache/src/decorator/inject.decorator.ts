import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject } from '@nestjs/common'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectRedisCacheManager () {
  return Inject(CACHE_MANAGER)
}
