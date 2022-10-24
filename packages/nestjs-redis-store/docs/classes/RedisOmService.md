# Class: RedisOmService

## Implements

- `OnModuleInit`
- `OnModuleDestroy`

## Properties

### client

• **client**: `Client`

#### Defined in

om/redis-om.service.ts:9

___

### options

• **options**: [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md)

#### Defined in

om/redis-om.service.ts:11

## Constructors

### constructor

• **new RedisOmService**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md) |

#### Defined in

om/redis-om.service.ts:11

## Methods

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

om/redis-om.service.ts:13

___

### onModuleDestroy

▸ **onModuleDestroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleDestroy.onModuleDestroy

#### Defined in

om/redis-om.service.ts:17
