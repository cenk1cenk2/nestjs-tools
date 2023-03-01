import { Inject } from '@nestjs/common'

import { EventManager } from '../event-manager.service'

export const InjectEventManagerService: typeof Inject<typeof EventManager> = () => {
  return Inject(EventManager)
}
