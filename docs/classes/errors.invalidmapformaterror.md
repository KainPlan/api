[api](../README.md) › [errors](../modules/errors.md) › [InvalidMapFormatError](errors.invalidmapformaterror.md)

# Class: InvalidMapFormatError

Will be thrown if a map in JSON format is lacking attributes or has
attributes with unexpected types/values. It will also be thrown, if a map's node
is malformatted in [KPMap.parse](models.kpmap.md#static-parse).

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **InvalidMapFormatError**

## Index

### Constructors

* [constructor](errors.invalidmapformaterror.md#constructor)

### Properties

* [message](errors.invalidmapformaterror.md#message)
* [name](errors.invalidmapformaterror.md#name)
* [stack](errors.invalidmapformaterror.md#optional-stack)
* [Error](errors.invalidmapformaterror.md#static-error)

## Constructors

###  constructor

\+ **new InvalidMapFormatError**(`msg`: string): *[InvalidMapFormatError](errors.invalidmapformaterror.md)*

*Defined in [src/errors/InvalidMapFormatError.ts:11](https://github.com/KainPlan/api/blob/5225f70/src/errors/InvalidMapFormatError.ts#L11)*

Creates a new InvalidMapFormatError - usually with the default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "Invalid map format!" | The error message.  |

**Returns:** *[InvalidMapFormatError](errors.invalidmapformaterror.md)*

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
