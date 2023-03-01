# Class: RedisOmService

## Implements

- `OnModuleInit`
- `OnModuleDestroy`

## Properties

### client

• **client**: `Client`

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:9

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:10

___

### keepAliveRef

• `Private` **keepAliveRef**: `Timer`

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:11

___

### options

• **options**: [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md)

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:13

## Constructors

### constructor

• **new RedisOmService**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md) |

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:13

## Methods

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:20

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:36

___

### onModuleDestroy

▸ **onModuleDestroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleDestroy.onModuleDestroy

#### Defined in

packages/nestjs-redis-store/src/om/redis-om.service.ts:40
