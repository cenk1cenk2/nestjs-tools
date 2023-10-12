import { Inject } from '@nestjs/common'

import { REDIS_STORE_INSTANCE } from '../redis-store.constants'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectRedisStoreService (token?: string | symbol) {
  return Inject(token ?? REDIS_STORE_INSTANCE)
}
