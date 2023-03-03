import { CACHE_MANAGER, Inject } from '@nestjs/common'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectRedisCacheManager () {
  return Inject(CACHE_MANAGER)
}
