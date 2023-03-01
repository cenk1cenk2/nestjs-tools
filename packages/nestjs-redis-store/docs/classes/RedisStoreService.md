# Class: RedisStoreService

## Implements

- `OnModuleInit`

## Properties

### client

• **client**: `Redis`

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:9

___

### adapter

• **adapter**: typeof `Redis`

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:10

___

### options

• **options**: [`RedisStoreModuleOptions`](../interfaces/RedisStoreModuleOptions.md)

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:12

## Constructors

### constructor

• **new RedisStoreService**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RedisStoreModuleOptions`](../interfaces/RedisStoreModuleOptions.md) |

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:12

## Methods

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:14

___

### initClient

▸ **initClient**(`adapter?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter` | typeof `Redis` |

#### Returns

`void`

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:22

___

### createChild

▸ **createChild**(): [`RedisStoreService`](RedisStoreService.md)

#### Returns

[`RedisStoreService`](RedisStoreService.md)

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:26

___

### createTopic

▸ **createTopic**(`topic`, `...extensions`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `...extensions` | `string`[] |

#### Returns

`string`

#### Defined in

packages/nestjs-redis-store/src/store/redis-store.service.ts:36
