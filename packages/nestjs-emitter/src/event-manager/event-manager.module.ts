import { Global, Module } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'

import { EventManager } from './event-manager.service'

@Global()
@Module({
  providers: [ EventManager, EventEmitter2 ],
  exports: [ EventManager ]
})
export class EventManagerModule {}
