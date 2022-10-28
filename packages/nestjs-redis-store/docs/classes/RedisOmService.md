# Class: RedisOmService

## Implements

- `OnModuleInit`
- `OnModuleDestroy`

## Properties

### client

• **client**: `Client`

#### Defined in

om/redis-om.service.ts:9

---

### logger

• `Private` **logger**: `Logger`

#### Defined in

om/redis-om.service.ts:10

---

### options

• **options**: [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md)

#### Defined in

om/redis-om.service.ts:12

## Constructors

### constructor

• **new RedisOmService**(`options`)

#### Parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `options` | [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md) |

#### Defined in

om/redis-om.service.ts:12

## Methods

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

om/redis-om.service.ts:19

---

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

om/redis-om.service.ts:31

---

### onModuleDestroy

▸ **onModuleDestroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleDestroy.onModuleDestroy

#### Defined in

om/redis-om.service.ts:35
