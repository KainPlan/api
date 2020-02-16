[api](../README.md) › [lib/error](lib_error.md)

# External module: lib/error

## Index

### Functions

* [e500](lib_error.md#e500)
* [errMsg](lib_error.md#errmsg)

## Functions

###  e500

▸ **e500**(`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `res`: express.Response): *void*

*Defined in [src/lib/error.ts:52](https://github.com/KainPlan/api/blob/b101ea0/src/lib/error.ts#L52)*

Should be used for all internal server errors:
Wrapper for [[lib.errMsg|`errors.errMsg`]] - if provided with an error and an express response,
it will take care of responding to the client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | The error object. |
`res` | express.Response | The Express response.  |

**Returns:** *void*

___

###  errMsg

▸ **errMsg**(`res`: express.Response, `code`: number, `opts`: object): *void*

*Defined in [src/lib/error.ts:15](https://github.com/KainPlan/api/blob/b101ea0/src/lib/error.ts#L15)*

Will send an error message using the given response, in the proper JSON format.

**Parameters:**

▪ **res**: *express.Response*

The Express Response.

▪ **code**: *number*

The Error Code.

▪`Default value`  **opts**: *object*= { err: undefined, msg: undefined, }

Extra options: Can contain an error object for logging and/or a specific error message.

Name | Type |
------ | ------ |
`err?` | [Error](../classes/errors.duplicatesessionerror.md#static-error) |
`msg?` | string |

**Returns:** *void*
