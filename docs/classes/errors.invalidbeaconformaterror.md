[api](../README.md) › [errors](../modules/errors.md) › [InvalidBeaconFormatError](errors.invalidbeaconformaterror.md)

# Class: InvalidBeaconFormatError

Will be thrown when a beacon in JSON format is missing a property
or has a property with an unexpected value/type. (Could be thrown in [KPBeacon.parse](models.kpbeacon.md#static-parse))

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **InvalidBeaconFormatError**

## Index

### Constructors

* [constructor](errors.invalidbeaconformaterror.md#constructor)

### Properties

* [message](errors.invalidbeaconformaterror.md#message)
* [name](errors.invalidbeaconformaterror.md#name)
* [stack](errors.invalidbeaconformaterror.md#optional-stack)
* [Error](errors.invalidbeaconformaterror.md#static-error)

## Constructors

###  constructor

\+ **new InvalidBeaconFormatError**(`msg`: string): *[InvalidBeaconFormatError](errors.invalidbeaconformaterror.md)*

*Defined in [src/errors/InvalidBeaconFormatError.ts:10](https://github.com/KainPlan/api/blob/3eeae78/src/errors/InvalidBeaconFormatError.ts#L10)*

Creates a new InvalidBeaconFormatError - usually with the default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "Invalid beacon format!" | The error message.  |

**Returns:** *[InvalidBeaconFormatError](errors.invalidbeaconformaterror.md)*

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
