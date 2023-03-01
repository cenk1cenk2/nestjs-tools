# Function: InjectRedisOmService

▸ **InjectRedisOmService**(`token?`): (`target`: `object`, `key`: `string` \| `symbol` \| `undefined`, `index?`: `number`) => `void`

Decorator that marks a constructor parameter as a target for
[Dependency Injection (DI)](https://docs.nestjs.com/providers#dependency-injection).

Any injected provider must be visible within the module scope (loosely
speaking, the containing module) of the class it is being injected into. This
can be done by:

- defining the provider in the same module scope
- exporting the provider from one module scope and importing that module into the
  module scope of the class being injected into
- exporting the provider from a module that is marked as global using the
  `@Global()` decorator

#### Injection tokens
Can be *types* (class names), *strings* or *symbols*. This depends on how the
provider with which it is associated was defined. Providers defined with the
`@Injectable()` decorator use the class name. Custom Providers may use strings
or symbols as the injection token.

**`See`**

 - [Providers](https://docs.nestjs.com/providers)
 - [Custom Providers](https://docs.nestjs.com/fundamentals/custom-providers)
 - [Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)

**`Public Api`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | typeof [`REDIS_OM_INSTANCE`](../variables/REDIS_OM_INSTANCE.md) | lookup key for the provider to be injected (assigned to the constructor parameter). |

#### Returns

`fn`

▸ (`target`, `key`, `index?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `key` | `string` \| `symbol` \| `undefined` |
| `index?` | `number` |

##### Returns

`void`

#### Defined in

node_modules/@nestjs/common/decorators/core/inject.decorator.d.ts:30
