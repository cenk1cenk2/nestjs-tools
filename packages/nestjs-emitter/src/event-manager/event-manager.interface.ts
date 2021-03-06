/**
 * A definition of a event with response-request map.
 */
export interface EventDefinition {
  response?: any
  request?: any
}

/**
 * Request type of an event.
 */
// this is a partial of any object since we want to make properties optional if we dont do this it will go mad
export type EventRequest<Event extends string, Map extends Record<string, EventDefinition>> = Event extends keyof Map
  ? 'request' extends keyof Map[Event]
    ? Map[Event]['request']
    : never
  : never

/**
 * Response type of an event.
 */
// this is a partial of any object since we want to make properties optional if we dont do this it will go mad
export type EventResponse<Event extends string, Map extends Record<string, EventDefinition>> = Event extends keyof Map
  ? 'response' extends keyof Map[Event]
    ? Map[Event]['response']
    : void
  : never

/**
 * For fast typing the event map.
 */
export type EventMap<Events extends string> = Partial<Record<Events, EventDefinition>>

/**
 * Give event map a set of indexes to not make it go crazy when some events are missing from it.
 * They are optional after all.
 */
export class BaseEventMap {
  [k: string]: any
}
