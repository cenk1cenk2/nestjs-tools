import { Inject } from '@nestjs/common'

import { EventManager } from '../event-manager/event-manager.service'

export function InjectEventManagerService (): (target: Record<string, unknown>, key: string | symbol, index?: number) => void {
  return Inject(EventManager)
}
