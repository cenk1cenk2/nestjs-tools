# Class: EventEmitter2

## Constructors

### constructor

• **new EventEmitter2**(`options?`)

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `options?` | `ConstructorOptions` |

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

---

### onAny

▸ **onAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

---

### prependAny

▸ **prependAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

---

### offAny

▸ **offAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

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

---

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

---

### setMaxListeners

▸ **setMaxListeners**(`n`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n`  | `number` |

#### Returns

`void`

---

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

---

### eventNames

▸ **eventNames**(`nsAsArray?`): (`string` \| `symbol` \| `event`[])[]

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `nsAsArray?` | `boolean` |

#### Returns

(`string` \| `symbol` \| `event`[])[]

---

### listenerCount

▸ **listenerCount**(`event?`): `number`

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`number`

---

### listeners

▸ **listeners**(`event?`): `ListenerFn`[]

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`ListenerFn`[]

---

### listenersAny

▸ **listenersAny**(): `ListenerFn`[]

#### Returns

`ListenerFn`[]

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

▸ **waitFor**(`event`, `filter?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `event`   | `string` \| `symbol` \| `event`[] |
| `filter?` | `WaitForFilter`                   |

#### Returns

`CancelablePromise`<`any`[]\>

▸ **waitFor**(`event`, `options?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `event`    | `string` \| `symbol` \| `event`[] |
| `options?` | `WaitForOptions`                  |

#### Returns

`CancelablePromise`<`any`[]\>

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

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `target`   | `GeneralEventEmitter` |
| `events`   | `event`[]             |
| `options?` | `ListenToOptions`     |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `target`   | `GeneralEventEmitter` |
| `events`   | `Object`              |
| `options?` | `ListenToOptions`     |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

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

---

### hasListeners

▸ **hasListeners**(`event?`): `Boolean`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `event?` | `String` |

#### Returns

`Boolean`

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

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:149
