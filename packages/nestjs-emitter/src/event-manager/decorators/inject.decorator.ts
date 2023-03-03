import { Inject } from '@nestjs/common'

import { EventManager } from '../event-manager.service'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectEventManagerService () {
  return Inject(EventManager)
}
