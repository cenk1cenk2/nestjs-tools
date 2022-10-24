# Class: EventManager<Event, Map\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends `string` = `string` |
| `Map` | extends `Partial`<`Record`<`Event`, [`EventDefinition`](../interfaces/EventDefinition.md)\>\> = `Partial`<`Record`<`Event`, `any`\>\> |

## Constructors

### constructor

• **new EventManager**<`Event`, `Map`\>(`emitter`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends `string` = `string` |
| `Map` | extends `Partial`<`Record`<`Event`, [`EventDefinition`](../interfaces/EventDefinition.md)\>\> = `Partial`<`Record`<`Event`, `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter2`](EventEmitter2.md) |

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.service.ts:8

## Properties

### emitter

• `Private` `Readonly` **emitter**: [`EventEmitter2`](EventEmitter2.md)

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.service.ts:8

## Methods

### emit

▸ **emit**<`E`, `MultipleResult`\>(`dispatch`, `args`, `options?`): `Promise`<`MultipleResult` extends ``true`` ? [`EventResponse`](../types/EventResponse.md)<`E`, `Map`\>[] : [`EventResponse`](../types/EventResponse.md)<`E`, `Map`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` = `Event` |
| `MultipleResult` | extends `boolean` = ``false`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatch` | `E` |
| `args` | [`EventRequest`](../types/EventRequest.md)<`E`, `Map`\> |
| `options?` | `Object` |
| `options.multiple?` | `MultipleResult` |

#### Returns

`Promise`<`MultipleResult` extends ``true`` ? [`EventResponse`](../types/EventResponse.md)<`E`, `Map`\>[] : [`EventResponse`](../types/EventResponse.md)<`E`, `Map`\>\>

#### Defined in

packages/nestjs-emitter/src/event-manager/event-manager.service.ts:10
