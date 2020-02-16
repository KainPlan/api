[api](../README.md) › [errors](../modules/errors.md) › [NoSessionFoundError](errors.nosessionfounderror.md)

# Class: NoSessionFoundError

Caused by a request using an expired/invalid token. ([`KPSession.getSession`](models.kpsession.md#static-getsession)).

## Hierarchy

* [Error](errors.duplicatesessionerror.md#static-error)

  ↳ **NoSessionFoundError**

## Index

### Constructors

* [constructor](errors.nosessionfounderror.md#constructor)

### Properties

* [message](errors.nosessionfounderror.md#message)
* [name](errors.nosessionfounderror.md#name)
* [stack](errors.nosessionfounderror.md#optional-stack)
* [Error](errors.nosessionfounderror.md#static-error)

## Constructors

###  constructor

\+ **new NoSessionFoundError**(`msg`: string): *[NoSessionFoundError](errors.nosessionfounderror.md)*

*Defined in [src/errors/NoSessionFoundError.ts:9](https://github.com/KainPlan/api/blob/b101ea0/src/errors/NoSessionFoundError.ts#L9)*

Creates a new NoSessionFoundError - normally with the default error message.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`msg` | string | "No session found!" | The error message.  |

**Returns:** *[NoSessionFoundError](errors.nosessionfounderror.md)*

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
