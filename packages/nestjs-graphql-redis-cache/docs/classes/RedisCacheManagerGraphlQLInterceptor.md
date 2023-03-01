# Class: RedisCacheManagerGraphlQLInterceptor

## Implements

- `NestInterceptor`

## Properties

### logger

• `Private` **logger**: `Logger`

#### Defined in

packages/nestjs-graphql-redis-cache/src/redis-cache-manager.interceptor.ts:15

___

### cache

• `Private` **cache**: [`RedisCacheManagerProvider`](../types/RedisCacheManagerProvider.md)

#### Defined in

packages/nestjs-graphql-redis-cache/src/redis-cache-manager.interceptor.ts:17

___

### reflector

• `Protected` `Readonly` **reflector**: `Reflector`

#### Defined in

packages/nestjs-graphql-redis-cache/src/redis-cache-manager.interceptor.ts:17

## Constructors

### constructor

• **new RedisCacheManagerGraphlQLInterceptor**(`cache`, `reflector`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | [`RedisCacheManagerProvider`](../types/RedisCacheManagerProvider.md) |
| `reflector` | `Reflector` |

#### Defined in

packages/nestjs-graphql-redis-cache/src/redis-cache-manager.interceptor.ts:17

## Methods

### intercept

▸ **intercept**(`context`, `next`): `Promise`<`Observable`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `GqlExecutionContext` |
| `next` | `CallHandler`<`any`\> |

#### Returns

`Promise`<`Observable`<`any`\>\>

#### Implementation of

NestInterceptor.intercept

#### Defined in

packages/nestjs-graphql-redis-cache/src/redis-cache-manager.interceptor.ts:19

___

### createTopic

▸ **createTopic**(`pattern`, `extensions`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `extensions` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

packages/nestjs-graphql-redis-cache/src/redis-cache-manager.interceptor.ts:40
