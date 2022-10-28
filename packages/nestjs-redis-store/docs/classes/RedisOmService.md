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

### keepAliveRef

• `Private` **keepAliveRef**: `Timer`

#### Defined in

om/redis-om.service.ts:11

---

### options

• **options**: [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md)

#### Defined in

om/redis-om.service.ts:13

## Constructors

### constructor

• **new RedisOmService**(`options`)

#### Parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `options` | [`RedisOmModuleOptions`](../interfaces/RedisOmModuleOptions.md) |

#### Defined in

om/redis-om.service.ts:13

## Methods

### onModuleInit

▸ **onModuleInit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleInit.onModuleInit

#### Defined in

om/redis-om.service.ts:20

---

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

om/redis-om.service.ts:32

---

### onModuleDestroy

▸ **onModuleDestroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

OnModuleDestroy.onModuleDestroy

#### Defined in

om/redis-om.service.ts:36
