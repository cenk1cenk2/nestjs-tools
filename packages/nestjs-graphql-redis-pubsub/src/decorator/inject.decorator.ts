import { Inject } from '@nestjs/common'

import { REDIS_PUBSUB_INSTANCE } from '../redis-pubsub.constants'

export function InjectRedisPubSubService (): PropertyDecorator {
  return Inject(REDIS_PUBSUB_INSTANCE)
}
