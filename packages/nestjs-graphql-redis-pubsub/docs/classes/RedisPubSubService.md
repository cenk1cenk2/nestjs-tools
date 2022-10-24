# Class: RedisPubSubService<RedisPubSubTopics, RedisPubSubMap\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `RedisPubSubTopics` | extends `string` = `string` |
| `RedisPubSubMap` | extends `Record`<`RedisPubSubTopics`, `any`\> = `any` |

## Implements

- `OnApplicationBootstrap`

## Properties

### pubSub

• `Private` **pubSub**: `RedisPubSub`

#### Defined in

redis-pubsub.service.ts:10

___

### options

• `Private` **options**: [`RedisPubSubModuleOptions`](../interfaces/RedisPubSubModuleOptions.md)

#### Defined in

redis-pubsub.service.ts:12

## Constructors

### constructor

• **new RedisPubSubService**<`RedisPubSubTopics`, `RedisPubSubMap`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RedisPubSubTopics` | extends `string` = `string` |
| `RedisPubSubMap` | extends `Record`<`RedisPubSubTopics`, `any`\> = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RedisPubSubModuleOptions`](../interfaces/RedisPubSubModuleOptions.md) |

#### Defined in

redis-pubsub.service.ts:12

## Methods

### onApplicationBootstrap

▸ **onApplicationBootstrap**(): `void`

#### Returns

`void`

#### Implementation of

OnApplicationBootstrap.onApplicationBootstrap

#### Defined in

redis-pubsub.service.ts:14

___

### publish

▸ **publish**<`Pattern`, `Data`\>(`pattern`, `extensions?`, `payload`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Pattern` | extends `string` |
| `Data` | extends `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | `Pattern` | `undefined` |
| `extensions` | `string` \| `string`[] | `[]` |
| `payload` | `Data` | `undefined` |

#### Returns

`Promise`<`void`\>

#### Defined in

redis-pubsub.service.ts:18

___

### subscribe

▸ **subscribe**<`Pattern`, `Data`\>(`pattern`, `extensions?`, `onMessage`): `Promise`<`number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Pattern` | extends `string` |
| `Data` | extends `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | `Pattern` | `undefined` |
| `extensions` | `string` \| `string`[] | `[]` |
| `onMessage` | (`message`: `Data`) => `void` | `undefined` |

#### Returns

`Promise`<`number`\>

#### Defined in

redis-pubsub.service.ts:22

___

### unsubscribe

▸ **unsubscribe**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

redis-pubsub.service.ts:30

___

### getClient

▸ **getClient**(): `Redis`

#### Returns

`Redis`

#### Defined in

redis-pubsub.service.ts:34

___

### iterator

▸ **iterator**<`Pattern`\>(`pattern`, `extensions?`): `AsyncIterator`<`any`, `any`, `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Pattern` | extends `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | `Pattern` | `undefined` |
| `extensions` | `string` \| `string`[] | `[]` |

#### Returns

`AsyncIterator`<`any`, `any`, `undefined`\>

#### Defined in

redis-pubsub.service.ts:38

___

### getSubscriberCount

▸ **getSubscriberCount**<`Pattern`\>(`pattern`, `extensions?`): `Promise`<`number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Pattern` | extends `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | `Pattern` | `undefined` |
| `extensions` | `string` \| `string`[] | `[]` |

#### Returns

`Promise`<`number`\>

#### Defined in

redis-pubsub.service.ts:42

___

### createTopic

▸ **createTopic**(`pattern`, `extensions`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `extensions` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

redis-pubsub.service.ts:53
