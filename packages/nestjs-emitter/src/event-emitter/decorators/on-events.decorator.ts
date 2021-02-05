import { SetMetadata } from '@nestjs/common'
import { OnOptions } from 'eventemitter2'

import { EVENT_LISTENER_METADATA_MULTIPLE } from '../constants'

/**
 * `@OnEvent` decorator metadata
 */
export interface OnEventsMetadata {
  /**
   * Event (name or pattern) to subscribe to.
   */
  event: (string | symbol | (string | symbol)[])[]
  /**
   * Subscription options.
   */
  options?: OnOptions
}

/**
 * Event listener decorator.
 * Subscribes to events based on the specified name(s).
 *
 * @param name event to subscribe to
 */
export const OnEvents = (event: (string | symbol | (string | symbol))[], options?: OnOptions): MethodDecorator =>
  SetMetadata(EVENT_LISTENER_METADATA_MULTIPLE, { event, options } as OnEventsMetadata)
