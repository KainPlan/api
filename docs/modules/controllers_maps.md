[api](../README.md) › [controllers/maps](controllers_maps.md)

# External module: controllers/maps

## Index

### Functions

* [getDefaultMap](controllers_maps.md#getdefaultmap)
* [getMap](controllers_maps.md#getmap)
* [getMaps](controllers_maps.md#getmaps)
* [getVersion](controllers_maps.md#getversion)
* [putMap](controllers_maps.md#putmap)

## Functions

###  getDefaultMap

▸ **getDefaultMap**(`req`: express.Request, `res`: express.Response): *void*

Defined in src/controllers/maps.ts:20

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

Defined in src/controllers/maps.ts:39

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

Defined in src/controllers/maps.ts:79

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

Defined in src/controllers/maps.ts:107

**`<LOGGED-IN>`**

Controller for `GET::/version/:m_name/:token` --> will respond with the version of the map queried for.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*

___

###  putMap

▸ **putMap**(`req`: express.Request, `res`: express.Response): *void*

Defined in src/controllers/maps.ts:57

**`<ADMIN>`**

Controller for `PUT::/map/:m_name/:token` --> will override the old content with the new map given.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | express.Request | The Express Request |
`res` | express.Response | The Express Response  |

**Returns:** *void*
