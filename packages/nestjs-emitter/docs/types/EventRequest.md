# Type alias: EventRequest<Event, Map\>

Ƭ **EventRequest**<`Event`, `Map`\>: `Event` extends keyof `Map` ? ``"request"`` extends keyof `Map`[`Event`] ? `Map`[`Event`][``"request"``] : `never` : `never`

Request type of an event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends `string` |
| `Map` | extends `Record`<`string`, [`EventDefinition`](../interfaces/EventDefinition.md)\> |

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.interface.ts:13
