import { CACHE_MANAGER, Inject } from '@nestjs/common'

export function InjectRedisCacheManager (): (target: Record<string, unknown>, key: string | symbol, index?: number) => void {
  return Inject(CACHE_MANAGER)
}
