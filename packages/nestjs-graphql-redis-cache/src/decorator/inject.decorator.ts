import { CACHE_MANAGER, Inject } from '@nestjs/common'

export const InjectRedisCacheManager: typeof Inject<typeof CACHE_MANAGER> = () => {
  return Inject(CACHE_MANAGER)
}
