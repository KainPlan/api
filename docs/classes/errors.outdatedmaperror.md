[api](../README.md) › [errors](../modules/errors.md) › [OutdatedMapError](errors.outdatedmaperror.md)

# Class: OutdatedMapError

Caused by trying to override an old map with a new one that has, however,
a lower version number. Only occurs in [`lib/io.writeMap`](../modules/lib_io.md#writemap).

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **OutdatedMapError**

## Index

### Constructors

* [constructor](errors.outdatedmaperror.md#constructor)

### Properties

* [message](errors.outdatedmaperror.md#message)
* [name](errors.outdatedmaperror.md#name)
* [stack](errors.outdatedmaperror.md#optional-stack)
* [Error](errors.outdatedmaperror.md#static-error)

## Constructors

###  constructor

\+ **new OutdatedMapError**(`msg`: string): *[OutdatedMapError](errors.outdatedmaperror.md)*

*Defined in [src/errors/OutdatedMapError.ts:10](https://github.com/KainPlan/api/blob/b101ea0/src/errors/OutdatedMapError.ts#L10)*

Creates a new OutdatedMapError with the given/default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "Outdated map (version too old)!" | The error message.  |

**Returns:** *[OutdatedMapError](errors.outdatedmaperror.md)*

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
