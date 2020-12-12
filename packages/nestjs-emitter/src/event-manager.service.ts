import { Injectable, Scope } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'

import { EventRequest, EventResponse, EventDefinition } from './event-manager.interface'

@Injectable({ scope: Scope.DEFAULT })
export class EventManager<
  Event extends string = string,
  Map extends Partial<Record<Event, EventDefinition>> = Partial<Record<Event, any>>
> {
  constructor (private readonly emitter: EventEmitter2) {}

  public async emit<E extends Event = Event, MultipleResult extends boolean = false>(
    dispatch: E,
    args: EventRequest<E, Map>,
    options?: { multiple?: MultipleResult }
  ): Promise<MultipleResult extends true ? EventResponse<E, Map>[] : EventResponse<E, Map>> {
    if (this.emitter.listenerCount(dispatch) === 0) {
      throw new Error(`No event listener found listening to event: ${dispatch}`)
    }

    const response = await this.emitter.emitAsync(dispatch, args)

    if (!options.multiple) {
      if (response.length === 1) {
        return response[0]
      } else {
        throw new Error('Expected multiple answers but the option.multiple was not set.')
      }
    }

    return response as MultipleResult extends true ? EventResponse<E, Map>[] : EventResponse<E, Map>
  }
}
