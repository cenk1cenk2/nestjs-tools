# Class: LoggerService

## Implements

- `LoggerService`

## Properties

### color

• `Protected` **color**: `Record`<`LogType`, (`message`: `string`) => `string`\>

#### Defined in

utils/logger/logger.service.ts:12

## Constructors

### constructor

• **new LoggerService**(`options?`)

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `options?` | `LoggerOptions` |

## Methods

### error

▸ **error**(`message`, `trace?`, `context?`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `message`  | `string` \| `string`[] |
| `trace?`   | `string`               |
| `context?` | `string`               |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.error

---

### log

▸ **log**(`message`, `context?`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `message`  | `string` \| `string`[] |
| `context?` | `string`               |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.log

---

### warn

▸ **warn**(`message`, `context?`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `message`  | `string` \| `string`[] |
| `context?` | `string`               |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.warn

---

### debug

▸ **debug**(`message`, `context?`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `message`  | `string` \| `string`[] |
| `context?` | `string`               |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.debug

---

### verbose

▸ **verbose**(`message`, `context?`): `void`

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `message`  | `string` \| `string`[] |
| `context?` | `string`               |

#### Returns

`void`

#### Implementation of

LoggerServiceCommon.verbose

---

### coloring

▸ `Private` **coloring**(`level`, `message`): `string`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `level`   | `LogType` |
| `message` | `string`  |

#### Returns

`string`

---

### logMessage

▸ `Private` **logMessage**(`__namedParameters`): `void`

#### Parameters

| Name                         | Type                   |
| :--------------------------- | :--------------------- |
| `__namedParameters`          | `Object`               |
| `__namedParameters.type`     | `string`               |
| `__namedParameters.message`  | `string` \| `string`[] |
| `__namedParameters.context?` | `string`               |
| `__namedParameters.trace?`   | `any`                  |
| `__namedParameters.ms?`      | `string`               |

#### Returns

`void`

---

### getLogger

▸ `Private` **getLogger**(`level?`): `Logger`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `level?` | `string` |

#### Returns

`Logger`
