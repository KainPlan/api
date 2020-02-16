[api](../README.md) › [middleware/auth](middleware_auth.md)

# External module: middleware/auth

## Index

### Functions

* [restrict](middleware_auth.md#restrict)
* [restrictAdmin](middleware_auth.md#restrictadmin)

## Functions

###  restrict

▸ **restrict**(`req`: express.Request, `res`: express.Response, `next`: express.NextFunction): *void*

*Defined in [src/middleware/auth.ts:17](https://github.com/KainPlan/api/blob/b101ea0/src/middleware/auth.ts#L17)*

Restricts access to _`logged-in`_ members only.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request. |
`res` | express.Response | The Express Reponse. |
`next` | express.NextFunction | The next function (the controller).  |

**Returns:** *void*

___

###  restrictAdmin

▸ **restrictAdmin**(`req`: express.Request, `res`: express.Response, `next`: express.NextFunction): *void*

*Defined in [src/middleware/auth.ts:35](https://github.com/KainPlan/api/blob/b101ea0/src/middleware/auth.ts#L35)*

Restricts access to _`admin`_ members only.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request. |
`res` | express.Response | The Express Response. |
`next` | express.NextFunction | The next function (the controller).  |

**Returns:** *void*
