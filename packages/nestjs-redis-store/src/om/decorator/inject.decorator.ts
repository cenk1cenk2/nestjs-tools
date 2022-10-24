import { Inject } from '@nestjs/common'

import { REDIS_OM_INSTANCE } from '../redis-om.constants'

export function InjectRedisOmService (): (target: Record<string, unknown>, key: string | symbol, index?: number) => void {
  return Inject(REDIS_OM_INSTANCE)
}
