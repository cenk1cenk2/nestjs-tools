import { Inject } from '@nestjs/common'

import { REDIS_PUBSUB_INSTANCE } from '../redis-pubsub.constants'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectRedisPubSubService () {
  return Inject(REDIS_PUBSUB_INSTANCE)
}
