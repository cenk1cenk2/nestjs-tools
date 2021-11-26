import { Inject } from '@nestjs/common'

import { REDIS_STORE_INSTANCE } from '../redis-store.constants'

export function InjectRedisStoreService (): (target: Record<string, unknown>, key: string | symbol, index?: number) => void {
  return Inject(REDIS_STORE_INSTANCE)
}
