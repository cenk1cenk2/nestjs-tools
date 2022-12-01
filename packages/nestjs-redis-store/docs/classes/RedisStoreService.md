# Class: RedisStoreService

## Implements

- `OnModuleInit`

## Properties

### client

• **client**: `Redis`

#### Defined in

store/redis-store.service.ts:9

---

### adapter

• **adapter**: typeof `Redis`

#### Defined in

store/redis-store.service.ts:10

---

### options

• **options**: [`RedisStoreModuleOptions`](../interfaces/RedisStoreModuleOptions.md)

#### Defined in

store/redis-store.service.ts:12

## Constructors

### constructor

• **new RedisStoreService**(`options`)

#### Parameters

| Name      | Type                                                                  |
| :-------- | :-------------------------------------------------------------------- |
| `options` | [`RedisStoreModuleOptions`](../interfaces/RedisStoreModuleOptions.md) |

#### Defined in

store/redis-store.service.ts:12

## Methods

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

store/redis-store.service.ts:14

---

### initClient

▸ **initClient**(`adapter?`): `void`

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `adapter` | typeof `Redis` |

#### Returns

`void`

#### Defined in

store/redis-store.service.ts:22

---

### createChild

▸ **createChild**(): [`RedisStoreService`](RedisStoreService.md)

#### Returns

[`RedisStoreService`](RedisStoreService.md)

#### Defined in

store/redis-store.service.ts:26

---

### createTopic

▸ **createTopic**(`topic`, ...`extensions`): `string`

#### Parameters

| Name            | Type       |
| :-------------- | :--------- |
| `topic`         | `string`   |
| `...extensions` | `string`[] |

#### Returns

`string`

#### Defined in

store/redis-store.service.ts:36
