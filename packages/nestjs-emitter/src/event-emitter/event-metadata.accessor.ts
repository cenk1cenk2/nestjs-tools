import { Injectable, Type } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { EVENT_LISTENER_METADATA } from '@nestjs/event-emitter/dist/constants'

import { OnEventMetadata } from './decorators'

@Injectable()
export class EventMetadataAccessor {
  constructor (private readonly reflector: Reflector) {}

  public getEventHandlerMetadata (target: Type<unknown>): OnEventMetadata | undefined {
    return this.reflector.get(EVENT_LISTENER_METADATA, target)
  }
}
