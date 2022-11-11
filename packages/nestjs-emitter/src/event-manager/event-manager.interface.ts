/**
 * A definition of a event with response-request map.
 */
export type EventDefinition =
  | {
    request?: any
    response?: any
  }
  | ((request?: any) => any)

/**
 * Request type of an event.
 */
// this is a partial of any object since we want to make properties optional if we dont do this it will go mad
export type EventRequest<Event extends string, Map extends Record<string, EventDefinition>> = Event extends keyof Map
  ? Map[Event] extends (request?: any) => any
    ? Map[Event] extends (request?: infer P) => any
      ? P
      : any
    : 'request' extends keyof Map[Event]
      ? Map[Event]['request']
      : any
  : never

/**
 * Response type of an event.
 */
// this is a partial of any object since we want to make properties optional if we dont do this it will go mad
export type EventResponse<Event extends string, Map extends Record<string, EventDefinition>> = Event extends keyof Map
  ? Map[Event] extends (request?: any) => any
    ? Map[Event] extends (request?: any) => infer P
      ? P
      : any
    : 'response' extends keyof Map[Event]
      ? Map[Event]['response']
      : any
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
  [k: string]: EventDefinition
}
