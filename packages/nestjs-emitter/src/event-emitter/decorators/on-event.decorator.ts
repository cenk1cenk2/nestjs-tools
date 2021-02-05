import { SetMetadata } from '@nestjs/common'
import { EVENT_LISTENER_METADATA } from '@nestjs/event-emitter/dist/constants'
import { OnOptions } from 'eventemitter2'

/**
 * `@OnEvent` decorator metadata
 */
export interface OnEventMetadata {
  /**
   * Event (name or pattern) to subscribe to.
   */
  event: (string | symbol | (string | symbol)[]) | (string | symbol | (string | symbol)[])[]
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
export const OnEvent = (event: string | symbol | (string | symbol)[], options?: OnOptions): MethodDecorator =>
  SetMetadata(EVENT_LISTENER_METADATA, { event, options } as OnEventMetadata)
