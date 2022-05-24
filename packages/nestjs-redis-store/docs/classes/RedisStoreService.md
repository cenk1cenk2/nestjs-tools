# Class: RedisStoreService

## Implements

- `OnModuleInit`

## Properties

### client

• **client**: `Redis`

#### Defined in

redis-store.service.ts:10

---

### options

• **options**: [`RedisPubSubModuleOptions`](../interfaces/RedisPubSubModuleOptions.md)

## Constructors

### constructor

• **new RedisStoreService**(`options`)

#### Parameters

| Name      | Type                                                                    |
| :-------- | :---------------------------------------------------------------------- |
| `options` | [`RedisPubSubModuleOptions`](../interfaces/RedisPubSubModuleOptions.md) |

#### Defined in

redis-store.service.ts:12

## Methods

### onModuleInit

▸ **onModuleInit**(): `void`

#### Returns

`void`

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

redis-store.service.ts:14

---

### createChild

▸ **createChild**(): [`RedisStoreService`](RedisStoreService.md)

#### Returns

[`RedisStoreService`](RedisStoreService.md)

#### Defined in

redis-store.service.ts:18

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

redis-store.service.ts:26
