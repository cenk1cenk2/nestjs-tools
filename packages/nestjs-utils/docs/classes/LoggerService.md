# Class: LoggerService

## Implements

- `LoggerService`

## Properties

### color

• `Protected` **color**: `Record`<`LogType`, (`message`: `string`) => `string`\>

#### Defined in

utils/logger/logger.service.ts:12

___

### options

• `Private` `Optional` `Readonly` **options**: `LoggerOptions`

#### Defined in

utils/logger/logger.service.ts:21

## Constructors

### constructor

• **new LoggerService**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `LoggerOptions` |

#### Defined in

utils/logger/logger.service.ts:21

## Methods

### error

▸ **error**(`message`, `trace?`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `string`[] |
| `trace?` | `string` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.error

#### Defined in

utils/logger/logger.service.ts:23

___

### log

▸ **log**(`message`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `string`[] |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.log

#### Defined in

utils/logger/logger.service.ts:32

___

### warn

▸ **warn**(`message`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `string`[] |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.warn

#### Defined in

utils/logger/logger.service.ts:40

___

### debug

▸ **debug**(`message`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `string`[] |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.debug

#### Defined in

utils/logger/logger.service.ts:48

___

### verbose

▸ **verbose**(`message`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `string`[] |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.verbose

#### Defined in

utils/logger/logger.service.ts:56

___

### coloring

▸ `Private` **coloring**(`level`, `message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogType` |
| `message` | `string` |

#### Returns

`string`

#### Defined in

utils/logger/logger.service.ts:64

___

### logMessage

▸ `Private` **logMessage**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.type` | `string` |
| `__namedParameters.message` | `string` \| `string`[] |
| `__namedParameters.context?` | `string` |
| `__namedParameters.trace?` | `any` |
| `__namedParameters.ms?` | `string` |

#### Returns

`void`

#### Defined in

utils/logger/logger.service.ts:68

___

### getLogger

▸ `Private` **getLogger**(`level?`): `Logger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level?` | `string` |

#### Returns

`Logger`

#### Defined in

utils/logger/logger.service.ts:89
