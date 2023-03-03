import { Inject } from '@nestjs/common'

import { REDIS_OM_INSTANCE } from '../redis-om.constants'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectRedisOmService () {
  return Inject(REDIS_OM_INSTANCE)
}
