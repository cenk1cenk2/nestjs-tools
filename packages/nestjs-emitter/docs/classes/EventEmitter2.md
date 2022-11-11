# Class: EventEmitter2

## Constructors

### constructor

• **new EventEmitter2**(`options?`)

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `options?` | `ConstructorOptions` |

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:118

## Methods

### emit

▸ **emit**(`event`, ...`values`): `boolean`

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `event`     | `string` \| `symbol` \| `event`[] |
| `...values` | `any`[]                           |

#### Returns

`boolean`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:119

---

### emitAsync

▸ **emitAsync**(`event`, ...`values`): `Promise`<`any`[]\>

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `event`     | `string` \| `symbol` \| `event`[] |
| `...values` | `any`[]                           |

#### Returns

`Promise`<`any`[]\>

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:120

---

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:121

---

### on

▸ **on**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |
| `options?` | `boolean` \| `OnOptions`          |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:122

---

### prependListener

▸ **prependListener**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |
| `options?` | `boolean` \| `OnOptions`          |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:123

---

### once

▸ **once**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |
| `options?` | `true` \| `OnOptions`             |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:124

---

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |
| `options?` | `boolean` \| `OnOptions`          |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:125

---

### many

▸ **many**(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name            | Type                              |
| :-------------- | :-------------------------------- |
| `event`         | `string` \| `symbol` \| `event`[] |
| `timesToListen` | `number`                          |
| `listener`      | `ListenerFn`                      |
| `options?`      | `boolean` \| `OnOptions`          |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:126

---

### prependMany

▸ **prependMany**(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name            | Type                              |
| :-------------- | :-------------------------------- |
| `event`         | `string` \| `symbol` \| `event`[] |
| `timesToListen` | `number`                          |
| `listener`      | `ListenerFn`                      |
| `options?`      | `boolean` \| `OnOptions`          |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:127

---

### onAny

▸ **onAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:128

---

### prependAny

▸ **prependAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:129

---

### offAny

▸ **offAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:130

---

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:131

---

### off

▸ **off**(`event`, `listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn`                      |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:132

---

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:133

---

### setMaxListeners

▸ **setMaxListeners**(`n`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n`  | `number` |

#### Returns

`void`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:134

---

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:135

---

### eventNames

▸ **eventNames**(`nsAsArray?`): (`string` \| `symbol` \| `event`[])[]

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `nsAsArray?` | `boolean` |

#### Returns

(`string` \| `symbol` \| `event`[])[]

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:136

---

### listenerCount

▸ **listenerCount**(`event?`): `number`

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`number`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:137

---

### listeners

▸ **listeners**(`event?`): `ListenerFn`[]

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`ListenerFn`[]

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:138

---

### listenersAny

▸ **listenersAny**(): `ListenerFn`[]

#### Returns

`ListenerFn`[]

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:139

---

### waitFor

▸ **waitFor**(`event`, `timeout?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `timeout?` | `number`                          |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:140

▸ **waitFor**(`event`, `filter?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `event`   | `string` \| `symbol` \| `event`[] |
| `filter?` | `WaitForFilter`                   |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:141

▸ **waitFor**(`event`, `options?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `options?` | `WaitForOptions`                  |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:142

---

### listenTo

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `target`   | `GeneralEventEmitter`             |
| `events`   | `string` \| `symbol` \| `event`[] |
| `options?` | `ListenToOptions`                 |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:143

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `target`   | `GeneralEventEmitter` |
| `events`   | `event`[]             |
| `options?` | `ListenToOptions`     |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:144

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `target`   | `GeneralEventEmitter` |
| `events`   | `Object`              |
| `options?` | `ListenToOptions`     |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:145

---

### stopListeningTo

▸ **stopListeningTo**(`target?`, `event?`): `Boolean`

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `target?` | `GeneralEventEmitter`             |
| `event?`  | `string` \| `symbol` \| `event`[] |

#### Returns

`Boolean`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:146

---

### hasListeners

▸ **hasListeners**(`event?`): `Boolean`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `event?` | `String` |

#### Returns

`Boolean`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:147

---

### once

▸ `Static` **once**(`emitter`, `event`, `options?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name       | Type                                |
| :--------- | :---------------------------------- |
| `emitter`  | [`EventEmitter2`](EventEmitter2.md) |
| `event`    | `string` \| `symbol` \| `event`[]   |
| `options?` | `OnceOptions`                       |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:148

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/@nestjs/event-emitter/node_modules/eventemitter2/eventemitter2.d.ts:149
