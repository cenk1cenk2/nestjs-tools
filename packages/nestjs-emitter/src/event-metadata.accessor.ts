import type{ Type } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { EVENT_LISTENER_METADATA, EVENT_LISTENER_METADATA_MULTIPLE } from './constants'
import type{ OnEventMetadata, OnEventsMetadata } from './decorators'

@Injectable()
export class EventMetadataAccessor {
  constructor (private readonly reflector: Reflector) {}

  public getOnEventMetadata (target: Type<unknown>): OnEventMetadata | undefined {
    return this.reflector.get(EVENT_LISTENER_METADATA, target)
  }

  public getOnEventsMetadata (target: Type<unknown>): OnEventsMetadata | undefined {
    return this.reflector.get(EVENT_LISTENER_METADATA_MULTIPLE, target)
  }
}
