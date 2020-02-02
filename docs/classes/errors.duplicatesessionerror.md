[api](../README.md) › [errors](../modules/errors.md) › [DuplicateSessionError](errors.duplicatesessionerror.md)

# Class: DuplicateSessionError

Indicates a session already exists (identical primary keys). Will be thrown by
[KPSession.addSession](models.kpsession.md#static-addsession) in case of a duplicate entry.

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **DuplicateSessionError**

## Index

### Constructors

* [constructor](errors.duplicatesessionerror.md#constructor)

### Properties

* [message](errors.duplicatesessionerror.md#message)
* [name](errors.duplicatesessionerror.md#name)
* [stack](errors.duplicatesessionerror.md#optional-stack)
* [Error](errors.duplicatesessionerror.md#static-error)

## Constructors

###  constructor

\+ **new DuplicateSessionError**(`msg`: string): *[DuplicateSessionError](errors.duplicatesessionerror.md)*

*Defined in [src/errors/DuplicateSessionError.ts:10](https://github.com/KainPlan/api/blob/3eeae78/src/errors/DuplicateSessionError.ts#L10)*

Creates a new DuplicateSessionError with either the message that was passed to it
or the default one.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "No duplicate sessions allowed!" | The error message.  |

**Returns:** *[DuplicateSessionError](errors.duplicatesessionerror.md)*

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
