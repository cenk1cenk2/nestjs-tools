import { CACHE_MANAGER, Inject } from '@nestjs/common'

export function InjectRedisCacheManager (): PropertyDecorator {
  return Inject(CACHE_MANAGER)
}
