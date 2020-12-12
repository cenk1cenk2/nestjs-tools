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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options?: { multiple?: MultipleResult }
  ): Promise<MultipleResult extends true ? EventResponse<E, Map>[] : EventResponse<E, Map>> {
    if (this.emitter.listenerCount(dispatch) === 0) {
      throw new Error(`No event listener found listening to event: ${dispatch}`)
    }

    const response = await this.emitter.emitAsync(dispatch, args)

    return response.length === 1 ? response[0]: response
  }
}
