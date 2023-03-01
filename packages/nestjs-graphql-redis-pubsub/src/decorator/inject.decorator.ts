import { Inject } from '@nestjs/common'

import { REDIS_PUBSUB_INSTANCE } from '../redis-pubsub.constants'

export const InjectRedisPubSubService: typeof Inject<typeof REDIS_PUBSUB_INSTANCE> = () => {
  return Inject(REDIS_PUBSUB_INSTANCE)
}
