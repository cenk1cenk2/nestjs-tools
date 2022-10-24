# Class: RedisStoreService

## Implements

- `OnModuleInit`

## Properties

### client

• **client**: `Redis`

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

▸ **onModuleInit**(): `void`

#### Returns

`void`

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

store/redis-store.service.ts:14

---

### createChild

▸ **createChild**(): [`RedisStoreService`](RedisStoreService.md)

#### Returns

[`RedisStoreService`](RedisStoreService.md)

#### Defined in

store/redis-store.service.ts:18

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

store/redis-store.service.ts:26
