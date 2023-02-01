# Class: EventEmitter2

## Constructors

### constructor

• **new EventEmitter2**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ConstructorOptions` |

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:122

## Methods

### emit

▸ **emit**(`event`, `...values`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `...values` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:123

___

### emitAsync

▸ **emitAsync**(`event`, `...values`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `...values` | `any`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:124

___

### addListener

▸ **addListener**(`event`, `listener`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:125

___

### on

▸ **on**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:126

___

### prependListener

▸ **prependListener**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:127

___

### once

▸ **once**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |
| `options?` | ``true`` \| `OnOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:128

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:129

___

### many

▸ **many**(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `timesToListen` | `number` |
| `listener` | `ListenerFn` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:130

___

### prependMany

▸ **prependMany**(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `timesToListen` | `number` |
| `listener` | `ListenerFn` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md) \| `Listener`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:131

___

### onAny

▸ **onAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:132

___

### prependAny

▸ **prependAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:133

___

### offAny

▸ **offAny**(`listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:134

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:135

___

### off

▸ **off**(`event`, `listener`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:136

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:137

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`void`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:138

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:139

___

### eventNames

▸ **eventNames**(`nsAsArray?`): (`string` \| `symbol` \| `event`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nsAsArray?` | `boolean` |

#### Returns

(`string` \| `symbol` \| `event`[])[]

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:140

___

### listenerCount

▸ **listenerCount**(`event?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`number`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:141

___

### listeners

▸ **listeners**(`event?`): `ListenerFn`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`ListenerFn`[]

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:142

___

### listenersAny

▸ **listenersAny**(): `ListenerFn`[]

#### Returns

`ListenerFn`[]

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:143

___

### waitFor

▸ **waitFor**(`event`, `timeout?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `timeout?` | `number` |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:144

▸ **waitFor**(`event`, `filter?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `filter?` | `WaitForFilter` |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:145

▸ **waitFor**(`event`, `options?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` \| `event`[] |
| `options?` | `WaitForOptions` |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:146

___

### listenTo

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `string` \| `symbol` \| `event`[] |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:147

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `event`[] |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:148

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter2`](EventEmitter2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `Object` |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter2`](EventEmitter2.md)

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:149

___

### stopListeningTo

▸ **stopListeningTo**(`target?`, `event?`): `Boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `GeneralEventEmitter` |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`Boolean`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:150

___

### hasListeners

▸ **hasListeners**(`event?`): `Boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `String` |

#### Returns

`Boolean`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:151

___

### once

▸ `Static` **once**(`emitter`, `event`, `options?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter2`](EventEmitter2.md) |
| `event` | `string` \| `symbol` \| `event`[] |
| `options?` | `OnceOptions` |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:152

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/eventemitter2/eventemitter2.d.ts:153
