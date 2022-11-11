# Type alias: EventRequest<Event, Map\>

Ƭ **EventRequest**<`Event`, `Map`\>: `Event` extends keyof `Map` ? `Map`[`Event`] extends (`request?`: `any`) => `any` ? `Map`[`Event`] extends (`request?`: infer P) => `any` ? `P` : `never` : `"request"` extends keyof `Map`[`Event`] ? `Map`[`Event`][``"request"``] : `never` : `never`

Request type of an event.

#### Type parameters

| Name    | Type                                                                 |
| :------ | :------------------------------------------------------------------- |
| `Event` | extends `string`                                                     |
| `Map`   | extends `Record`<`string`, [`EventDefinition`](EventDefinition.md)\> |

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.interface.ts:15
