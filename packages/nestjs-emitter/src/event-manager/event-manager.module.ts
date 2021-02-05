import { Global, Module } from '@nestjs/common'

import { EventManager } from './event-manager.service'

@Global()
@Module({
  providers: [ EventManager ],
  exports: [ EventManager ]
})
export class EventManagerModule {}
