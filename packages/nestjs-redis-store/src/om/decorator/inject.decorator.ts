import { Inject } from '@nestjs/common'

import { REDIS_OM_INSTANCE } from '../redis-om.constants'

export const InjectRedisOmService: typeof Inject<typeof REDIS_OM_INSTANCE> = () => {
  return Inject(REDIS_OM_INSTANCE)
}
