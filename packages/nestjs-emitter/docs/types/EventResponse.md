# Type alias: EventResponse<Event, Map\>

Ƭ **EventResponse**<`Event`, `Map`\>: `Event` extends keyof `Map` ? `Map`[`Event`] extends (`request?`: `any`) => `any` ? `Map`[`Event`] extends (`request?`: `any`) => infer P ? `P` : `any` : `"response"` extends keyof `Map`[`Event`] ? `Map`[`Event`][``"response"``] : `any` : `never`

Response type of an event.

#### Type parameters

| Name    | Type                                                                 |
| :------ | :------------------------------------------------------------------- |
| `Event` | extends `string`                                                     |
| `Map`   | extends `Record`<`string`, [`EventDefinition`](EventDefinition.md)\> |

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.interface.ts:29
