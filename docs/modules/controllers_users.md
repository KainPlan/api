[api](../README.md) › [controllers/users](controllers_users.md)

# External module: controllers/users

## Index

### Functions

* [getProfile](controllers_users.md#getprofile)
* [login](controllers_users.md#login)

## Functions

###  getProfile

▸ **getProfile**(`req`: express.Request, `res`: express.Response): *void*

Defined in src/controllers/users.ts:48

**`<LOGGED-IN>`**

Controller for `GET::/profile/:token` --> will respond with basic information about the current user.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  login

▸ **login**(`req`: express.Request, `res`: express.Response): *void*

Defined in src/controllers/users.ts:19

**`<ANYONE>`**

Controller for `POST::/login` --> checks the sent credentials and responds with either the appropriate session-token or with an error message.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*
