import { Inject } from '@nestjs/common'

import { REDIS_OM_INSTANCE } from '../redis-om.constants'

export function InjectRedisOmService (): PropertyDecorator {
  return Inject(REDIS_OM_INSTANCE)
}
