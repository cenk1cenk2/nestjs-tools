import { Inject } from '@nestjs/common'

import { REDIS_STORE_INSTANCE } from '../redis-store.constants'

export const InjectRedisStoreService: typeof Inject<typeof REDIS_STORE_INSTANCE> = () => {
  return Inject(REDIS_STORE_INSTANCE)
}
