# Class: RedisCacheManagerGraphlQLInterceptor

## Implements

- `NestInterceptor`

## Properties

### logger

• `Private` **logger**: `Logger`

#### Defined in

redis-cache-manager.interceptor.ts:15

---

### reflector

• `Protected` `Readonly` **reflector**: `Reflector`

## Constructors

### constructor

• **new RedisCacheManagerGraphlQLInterceptor**(`cache`, `reflector`)

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `cache`     | `Cache`     |
| `reflector` | `Reflector` |

#### Defined in

redis-cache-manager.interceptor.ts:17

## Methods

### intercept

▸ **intercept**(`context`, `next`): `Promise`<`Observable`<`any`\>\>

#### Parameters

| Name      | Type                  |
| :-------- | :-------------------- |
| `context` | `GqlExecutionContext` |
| `next`    | `CallHandler`<`any`\> |

#### Returns

`Promise`<`Observable`<`any`\>\>

#### Implementation of

NestInterceptor.intercept

#### Defined in

redis-cache-manager.interceptor.ts:19

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

redis-cache-manager.interceptor.ts:40
