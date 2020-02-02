[api](../README.md) › [controllers/api](controllers_api.md)

# External module: controllers/api

## Index

### Functions

* [getDefaultMap](controllers_api.md#getdefaultmap)
* [getMap](controllers_api.md#getmap)
* [getMaps](controllers_api.md#getmaps)
* [getVersion](controllers_api.md#getversion)
* [login](controllers_api.md#login)
* [putMap](controllers_api.md#putmap)

## Functions

###  getDefaultMap

▸ **getDefaultMap**(`req`: express.Request, `res`: express.Response): *void*

*Defined in [src/controllers/api.ts:21](https://github.com/KainPlan/api/blob/3eeae78/src/controllers/api.ts#L21)*

**`<ANYONE>`**

Controller for `GET::/map` --> will respond with the default map (as defined in `res/maps/conf.json`).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  getMap

▸ **getMap**(`req`: express.Request, `res`: express.Response): *void*

*Defined in [src/controllers/api.ts:40](https://github.com/KainPlan/api/blob/3eeae78/src/controllers/api.ts#L40)*

**`<LOGGED-IN>`**

Controller for `GET::/map/:m_name/:token` --> will respond with the map the user asked for.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  getMaps

▸ **getMaps**(`req`: express.Request, `res`: express.Response): *void*

*Defined in [src/controllers/api.ts:80](https://github.com/KainPlan/api/blob/3eeae78/src/controllers/api.ts#L80)*

**`<LOGGED-IN>`**

Controller for `GET::/maps/:token` --> responds with all maps (`xxx.map.json` files in `res/maps`) and a timestamp of when they were last edited.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  getVersion

▸ **getVersion**(`req`: express.Request, `res`: express.Response): *void*

*Defined in [src/controllers/api.ts:108](https://github.com/KainPlan/api/blob/3eeae78/src/controllers/api.ts#L108)*

**`<LOGGED-IN>`**

Controller for `GET::/version/:m_name/:token` --> will respond with the version of the map queried for.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  login

▸ **login**(`req`: express.Request, `res`: express.Response): *void*

*Defined in [src/controllers/api.ts:129](https://github.com/KainPlan/api/blob/3eeae78/src/controllers/api.ts#L129)*

**`<ANYONE>`**

Controller for `POST::/login` --> checks the sent credentials and responds with either the appropriate session-token or with an error message.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  putMap

▸ **putMap**(`req`: express.Request, `res`: express.Response): *void*

*Defined in [src/controllers/api.ts:58](https://github.com/KainPlan/api/blob/3eeae78/src/controllers/api.ts#L58)*

**`<ADMIN>`**

Controller for `PUT::/map/:m_name/:token` --> will override the old content with the new map given.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*
