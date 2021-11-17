import { Inject } from '@nestjs/common'

import { REDIS_PUBSUB_INSTANCE } from '../redis-pubsub.constants'

export function InjectRedisPubSubService (): (target: Record<string, unknown>, key: string | symbol, index?: number) => void {
  return Inject(REDIS_PUBSUB_INSTANCE)
}
