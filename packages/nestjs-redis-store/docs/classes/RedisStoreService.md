# Class: RedisStoreService<RedisStoreTopics, RedisStoreMap\>

## Type parameters

| Name               | Type                                                 |
| :----------------- | :--------------------------------------------------- |
| `RedisStoreTopics` | extends `string` = `string`                          |
| `RedisStoreMap`    | extends `Record`<`RedisStoreTopics`, `any`\> = `any` |

## Implements

- `OnModuleInit`

## Properties

### client

• **client**: `Redis`

#### Defined in

redis-store.service.ts:11

## Constructors

### constructor

• **new RedisStoreService**<`RedisStoreTopics`, `RedisStoreMap`\>(`options`)

#### Type parameters

| Name               | Type                                                 |
| :----------------- | :--------------------------------------------------- |
| `RedisStoreTopics` | extends `string` = `string`                          |
| `RedisStoreMap`    | extends `Record`<`RedisStoreTopics`, `any`\> = `any` |

#### Parameters

| Name      | Type                                                                    |
| :-------- | :---------------------------------------------------------------------- |
| `options` | [`RedisPubSubModuleOptions`](../interfaces/RedisPubSubModuleOptions.md) |

#### Defined in

redis-store.service.ts:13

## Methods

### onModuleInit

▸ **onModuleInit**(): `void`

#### Returns

`void`

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

redis-store.service.ts:15

---

### set

▸ **set**<`Pattern`, `Data`\>(`pattern`, `extensions?`, `payload`, `options?`): `Promise`<`void`\>

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `Pattern` | extends `string` |
| `Data`    | extends `any`    |

#### Parameters

| Name         | Type                   | Default value |
| :----------- | :--------------------- | :------------ |
| `pattern`    | `Pattern`              | `undefined`   |
| `extensions` | `string` \| `string`[] | `[]`          |
| `payload`    | `Data`                 | `undefined`   |
| `options?`   | `RedisIOSetOptions`    | `undefined`   |

#### Returns

`Promise`<`void`\>

#### Defined in

redis-store.service.ts:19

---

### get

▸ **get**<`Pattern`, `Data`\>(`pattern`, `extensions?`): `Promise`<`Data`\>

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `Pattern` | extends `string` |
| `Data`    | extends `any`    |

#### Parameters

| Name         | Type                   | Default value |
| :----------- | :--------------------- | :------------ |
| `pattern`    | `Pattern`              | `undefined`   |
| `extensions` | `string` \| `string`[] | `[]`          |

#### Returns

`Promise`<`Data`\>

#### Defined in

redis-store.service.ts:40

---

### rename

▸ **rename**<`Pattern`\>(`pattern`, `extensions?`, `newPattern`, `newExtensions?`): `Promise`<`void`\>

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `Pattern` | extends `string` |

#### Parameters

| Name            | Type                   | Default value |
| :-------------- | :--------------------- | :------------ |
| `pattern`       | `Pattern`              | `undefined`   |
| `extensions`    | `string` \| `string`[] | `[]`          |
| `newPattern`    | `Pattern`              | `undefined`   |
| `newExtensions` | `string` \| `string`[] | `[]`          |

#### Returns

`Promise`<`void`\>

#### Defined in

redis-store.service.ts:48

---

### del

▸ **del**<`Pattern`\>(`pattern`, `extensions?`): `Promise`<`number`\>

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `Pattern` | extends `string` |

#### Parameters

| Name         | Type                   | Default value |
| :----------- | :--------------------- | :------------ |
| `pattern`    | `Pattern`              | `undefined`   |
| `extensions` | `string` \| `string`[] | `[]`          |

#### Returns

`Promise`<`number`\>

#### Defined in

redis-store.service.ts:64

---

### getClient

▸ **getClient**(): `Redis`

#### Returns

`Redis`

#### Defined in

redis-store.service.ts:70

---

### createTopic

▸ **createTopic**(`pattern`, `extensions`): `string`

#### Parameters

| Name         | Type                   |
| :----------- | :--------------------- |
| `pattern`    | `string`               |
| `extensions` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

redis-store.service.ts:74
