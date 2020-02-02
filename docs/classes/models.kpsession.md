[api](../README.md) › [models](../modules/models.md) › [KPSession](models.kpsession.md)

# Class: KPSession

Represents a user session on a programmatic level.

## Hierarchy

* **KPSession**

## Index

### Constructors

* [constructor](models.kpsession.md#constructor)

### Properties

* [addr](models.kpsession.md#addr)
* [token](models.kpsession.md#token)
* [uname](models.kpsession.md#uname)

### Methods

* [addSession](models.kpsession.md#static-addsession)
* [deleteTimedOutSessions](models.kpsession.md#static-deletetimedoutsessions)
* [generateSession](models.kpsession.md#static-generatesession)
* [getSession](models.kpsession.md#static-getsession)
* [removeSession](models.kpsession.md#static-removesession)
* [sessionExists](models.kpsession.md#static-sessionexists)
* [startTimeoutLoop](models.kpsession.md#static-starttimeoutloop)
* [useSession](models.kpsession.md#static-usesession)

## Constructors

###  constructor

\+ **new KPSession**(`addr`: string, `token`: string, `uname`: string): *[KPSession](models.kpsession.md)*

*Defined in [src/models/KPSession.ts:93](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L93)*

Creates a new KainPlan Session with the given parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addr` | string | The user's IP address. |
`token` | string | The user's session token. |
`uname` | string | The username.  |

**Returns:** *[KPSession](models.kpsession.md)*

## Properties

###  addr

• **addr**: *string*

*Defined in [src/models/KPSession.ts:85](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L85)*

The user's IP address; stored for basic XSS-Prevention.

___

###  token

• **token**: *string*

*Defined in [src/models/KPSession.ts:89](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L89)*

The user's session token.

___

###  uname

• **uname**: *string*

*Defined in [src/models/KPSession.ts:93](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L93)*

The username used in the session.

## Methods

### `Static` addSession

▸ **addSession**(`sess`: [KPSession](models.kpsession.md), `cb`: [AddSessionCallback](../modules/models.md#addsessioncallback)): *void*

*Defined in [src/models/KPSession.ts:159](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L159)*

Adds a KainPlan User Session to the database - unless it's already present,
in which case the callback will receive a [`DuplicateSessionError`](errors.duplicatesessionerror.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sess` | [KPSession](models.kpsession.md) | The session. |
`cb` | [AddSessionCallback](../modules/models.md#addsessioncallback) | The callback.  |

**Returns:** *void*

___

### `Static` deleteTimedOutSessions

▸ **deleteTimedOutSessions**(`timeout`: number, `cb`: [DeleteTimedOutSessionsCallback](../modules/models.md#deletetimedoutsessionscallback)): *void*

*Defined in [src/models/KPSession.ts:238](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L238)*

Removes all "timed-out" user sessions from the database.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`timeout` | number | conf.timeout | The timeout [minutes]. |
`cb` | [DeleteTimedOutSessionsCallback](../modules/models.md#deletetimedoutsessionscallback) | (err) => undefined | The callback.  |

**Returns:** *void*

___

### `Static` generateSession

▸ **generateSession**(`addr`: string, `uname`: string, `cb`: [GenerateSessionCallback](../modules/models.md#generatesessioncallback)): *void*

*Defined in [src/models/KPSession.ts:182](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L182)*

Creates a new KainPlan User Session with a random 8 Byte token (hex-represenation: 16 chars).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addr` | string | The IP address. |
`uname` | string | The username. |
`cb` | [GenerateSessionCallback](../modules/models.md#generatesessioncallback) | The callback.  |

**Returns:** *void*

___

### `Static` getSession

▸ **getSession**(`addr`: string, `token`: string, `cb`: [GetSessionCallback](../modules/models.md#getsessioncallback)): *void*

*Defined in [src/models/KPSession.ts:115](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L115)*

Retrieves a user session from the MySQL database, if possible. In case
the target session is not found, a [`NoSessionFoundError`](errors.nosessionfounderror.md) will
be passed to the callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addr` | string | The target IP address. |
`token` | string | The target session token. |
`cb` | [GetSessionCallback](../modules/models.md#getsessioncallback) | The callback.  |

**Returns:** *void*

___

### `Static` removeSession

▸ **removeSession**(`addr`: string, `token`: string, `cb`: [RemoveSessionCallback](../modules/models.md#removesessioncallback)): *void*

*Defined in [src/models/KPSession.ts:139](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L139)*

Will delete the target session if it exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addr` | string | The target IP address. |
`token` | string | The target session token. |
`cb` | [RemoveSessionCallback](../modules/models.md#removesessioncallback) | The callback.  |

**Returns:** *void*

___

### `Static` sessionExists

▸ **sessionExists**(`addr`: string, `token`: string, `cb`: [SessionExistsCallback](../modules/models.md#sessionexistscallback)): *void*

*Defined in [src/models/KPSession.ts:224](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L224)*

Checks whether or not a session with the given attributes exists in the database.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addr` | string | The IP address. |
`token` | string | The session token. |
`cb` | [SessionExistsCallback](../modules/models.md#sessionexistscallback) | The callback.  |

**Returns:** *void*

___

### `Static` startTimeoutLoop

▸ **startTimeoutLoop**(`verbose`: boolean): *Promise‹void›*

*Defined in [src/models/KPSession.ts:256](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L256)*

Starts deleting all "timed-out" sessions as specified in the
`config/session.json` configuration file.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`verbose` | boolean | true | Should a notification be logged at `info` level.  |

**Returns:** *Promise‹void›*

___

### `Static` useSession

▸ **useSession**(`addr`: string, `token`: string, `cb`: [UseSessionCallback](../modules/models.md#usesessioncallback)): *void*

*Defined in [src/models/KPSession.ts:203](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L203)*

"Uses" a KPSession - updates its timestamp value, in order to prevent it
from expiring.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addr` | string | The IP address. |
`token` | string | The session token. |
`cb` | [UseSessionCallback](../modules/models.md#usesessioncallback) | The callback.  |

**Returns:** *void*
