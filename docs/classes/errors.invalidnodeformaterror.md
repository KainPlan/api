[api](../README.md) › [errors](../modules/errors.md) › [InvalidNodeFormatError](errors.invalidnodeformaterror.md)

# Class: InvalidNodeFormatError

Will be thrown if a Node's ([`KPNode`](models.kpnode.md), [`KPStairsNode`](models.kpstairsnode.md), [`KPEndNode`](models.kpendnode.md)) JSON
representation is malformatted.

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **InvalidNodeFormatError**

## Index

### Constructors

* [constructor](errors.invalidnodeformaterror.md#constructor)

### Properties

* [message](errors.invalidnodeformaterror.md#message)
* [name](errors.invalidnodeformaterror.md#name)
* [stack](errors.invalidnodeformaterror.md#optional-stack)
* [Error](errors.invalidnodeformaterror.md#static-error)

## Constructors

###  constructor

\+ **new InvalidNodeFormatError**(`msg`: string): *[InvalidNodeFormatError](errors.invalidnodeformaterror.md)*

*Defined in [src/errors/InvalidNodeFormatError.ts:10](https://github.com/KainPlan/api/blob/1c0199f/src/errors/InvalidNodeFormatError.ts#L10)*

Creates a new InvalidNodeFormatError with the given/default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "Invalid node format!" | The error message.  |

**Returns:** *[InvalidNodeFormatError](errors.invalidnodeformaterror.md)*

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
