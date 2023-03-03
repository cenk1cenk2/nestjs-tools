import { Inject } from '@nestjs/common'

import { REDIS_STORE_INSTANCE } from '../redis-store.constants'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectRedisStoreService () {
  return Inject(REDIS_STORE_INSTANCE)
}
