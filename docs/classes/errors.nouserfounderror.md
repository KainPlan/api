[api](../README.md) › [errors](../modules/errors.md) › [NoUserFoundError](errors.nouserfounderror.md)

# Class: NoUserFoundError

Caused by querying for a non-existent user. Will be thrown in [`KPUser.getUser`](models.kpuser.md#static-getuser).

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **NoUserFoundError**

## Index

### Constructors

* [constructor](errors.nouserfounderror.md#constructor)

### Properties

* [message](errors.nouserfounderror.md#message)
* [name](errors.nouserfounderror.md#name)
* [stack](errors.nouserfounderror.md#optional-stack)
* [Error](errors.nouserfounderror.md#static-error)

## Constructors

###  constructor

\+ **new NoUserFoundError**(`msg`: string): *[NoUserFoundError](errors.nouserfounderror.md)*

*Defined in [src/errors/NoUserFoundError.ts:9](https://github.com/KainPlan/api/blob/5225f70/src/errors/NoUserFoundError.ts#L9)*

Returns a new NoUserFoundError - usually with the default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "No user found!" | The error message.  |

**Returns:** *[NoUserFoundError](errors.nouserfounderror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [DuplicateSessionError](errors.duplicatesessionerror.md).[message](errors.duplicatesessionerror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [DuplicateSessionError](errors.duplicatesessionerror.md).[name](errors.duplicatesessionerror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [DuplicateSessionError](errors.duplicatesessionerror.md).[stack](errors.duplicatesessionerror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
