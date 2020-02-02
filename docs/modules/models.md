[api](../README.md) › [models](models.md)

# External module: models

## Index

### Classes

* [KPBeacon](../classes/models.kpbeacon.md)
* [KPEndNode](../classes/models.kpendnode.md)
* [KPMap](../classes/models.kpmap.md)
* [KPNode](../classes/models.kpnode.md)
* [KPSession](../classes/models.kpsession.md)
* [KPStairsNode](../classes/models.kpstairsnode.md)
* [KPUser](../classes/models.kpuser.md)

### Type aliases

* [AddSessionCallback](models.md#addsessioncallback)
* [DeleteTimedOutSessionsCallback](models.md#deletetimedoutsessionscallback)
* [GenerateSessionCallback](models.md#generatesessioncallback)
* [GetSessionCallback](models.md#getsessioncallback)
* [GetUserCallback](models.md#getusercallback)
* [RemoveSessionCallback](models.md#removesessioncallback)
* [SessionExistsCallback](models.md#sessionexistscallback)
* [UseSessionCallback](models.md#usesessioncallback)
* [UserExistsCallback](models.md#userexistscallback)

## Type aliases

###  AddSessionCallback

Ƭ **AddSessionCallback**: *function*

*Defined in [src/models/KPSession.ts:34](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L34)*

The callback for the [`KPSession.addSession`](../classes/models.kpsession.md#static-addsession) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here.  |

___

###  DeleteTimedOutSessionsCallback

Ƭ **DeleteTimedOutSessionsCallback**: *function*

*Defined in [src/models/KPSession.ts:72](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L72)*

The callback for the [`KPSession.deleteTimedOutSessions`](../classes/models.kpsession.md#static-deletetimedoutsessions) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here.  |

___

###  GenerateSessionCallback

Ƭ **GenerateSessionCallback**: *function*

*Defined in [src/models/KPSession.ts:43](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L43)*

The callback for the [`KPSession.generateSession`](../classes/models.kpsession.md#static-generatesession) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `sess`: [KPSession](../classes/models.kpsession.md)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here. |
`sess` | [KPSession](../classes/models.kpsession.md) | The generated session.  |

___

###  GetSessionCallback

Ƭ **GetSessionCallback**: *function*

*Defined in [src/models/KPSession.ts:15](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L15)*

The callback for the [`KPSession.getSession`](../classes/models.kpsession.md#static-getsession) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `sess`: [KPSession](../classes/models.kpsession.md)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here. |
`sess` | [KPSession](../classes/models.kpsession.md) | The target session.  |

___

###  GetUserCallback

Ƭ **GetUserCallback**: *function*

*Defined in [src/models/KPUser.ts:12](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L12)*

The callback for the [`KPUser.getUser`](../classes/models.kpuser.md#static-getuser) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `user`: [KPUser](../classes/models.kpuser.md)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here. |
`user` | [KPUser](../classes/models.kpuser.md) | The target user.  |

___

###  RemoveSessionCallback

Ƭ **RemoveSessionCallback**: *function*

*Defined in [src/models/KPSession.ts:25](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L25)*

The callback for the [`KPSession.removeSession`](../classes/models.kpsession.md#static-removesession) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here.  |

___

###  SessionExistsCallback

Ƭ **SessionExistsCallback**: *function*

*Defined in [src/models/KPSession.ts:62](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L62)*

The callback for the [`KPSession.sessionExists`](../classes/models.kpsession.md#static-sessionexists) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `exists`: boolean): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here. |
`exists` | boolean | Indicates whether or not a match was found.  |

___

###  UseSessionCallback

Ƭ **UseSessionCallback**: *function*

*Defined in [src/models/KPSession.ts:53](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPSession.ts#L53)*

The callback for the [`KPSession.useSession`](../classes/models.kpsession.md#static-usesession) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here.  |

___

###  UserExistsCallback

Ƭ **UserExistsCallback**: *function*

*Defined in [src/models/KPUser.ts:22](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L22)*

The callback for the [`KPUser.userExists`](../classes/models.kpuser.md#static-userexists) method.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `exists`: boolean): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred, the callback will receive it here. |
`exists` | boolean | Indicates whether or not a match was found.  |
