[api](../README.md) › [errors](../modules/errors.md) › [MapNotFoundError](errors.mapnotfounderror.md)

# Class: MapNotFoundError

The Error 404 of Map I/O. Shouldn't usually, but can occur in [`controllers/api.getDefaultMap`](../modules/controllers_api.md#getdefaultmap).
Will more regularly be thrown by [`lib/io.readRawMap`](../modules/lib_io.md#readrawmap) - in case the specified map isn't found.

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **MapNotFoundError**

## Index

### Constructors

* [constructor](errors.mapnotfounderror.md#constructor)

### Properties

* [message](errors.mapnotfounderror.md#message)
* [name](errors.mapnotfounderror.md#name)
* [stack](errors.mapnotfounderror.md#optional-stack)
* [Error](errors.mapnotfounderror.md#static-error)

## Constructors

###  constructor

\+ **new MapNotFoundError**(`msg`: string): *[MapNotFoundError](errors.mapnotfounderror.md)*

*Defined in [src/errors/MapNotFoundError.ts:10](https://github.com/KainPlan/api/blob/5225f70/src/errors/MapNotFoundError.ts#L10)*

Creates a new MapNotFoundError - normally with the default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "Map couldn't be found!" | The error message.  |

**Returns:** *[MapNotFoundError](errors.mapnotfounderror.md)*

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
