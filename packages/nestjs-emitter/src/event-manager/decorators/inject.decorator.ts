import { Inject } from '@nestjs/common'

import { EventManager } from '../event-manager.service'

export function InjectEventManagerService (): PropertyDecorator {
  return Inject(EventManager)
}
