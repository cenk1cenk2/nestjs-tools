import { Inject } from '@nestjs/common'

import { REDIS_STORE_INSTANCE } from '../redis-store.constants'

export function InjectRedisStoreService (): PropertyDecorator {
  return Inject(REDIS_STORE_INSTANCE)
}
