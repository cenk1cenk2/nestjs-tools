# Type alias: EventResponse<Event, Map\>

Ƭ **EventResponse**<`Event`, `Map`\>: `Event` extends keyof `Map` ? `"response"` extends keyof `Map`[`Event`] ? `Map`[`Event`][``"response"``] : `void` : `never`

Response type of an event.

#### Type parameters

| Name    | Type                                                                               |
| :------ | :--------------------------------------------------------------------------------- |
| `Event` | extends `string`                                                                   |
| `Map`   | extends `Record`<`string`, [`EventDefinition`](../interfaces/EventDefinition.md)\> |

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.interface.ts:23
