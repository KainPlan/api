[api](../README.md) › [models](../modules/models.md) › [KPUser](models.kpuser.md)

# Class: KPUser

Represents a user on a programmatic level.

## Hierarchy

* **KPUser**

## Index

### Constructors

* [constructor](models.kpuser.md#constructor)

### Properties

* [isAdmin](models.kpuser.md#isadmin)
* [password](models.kpuser.md#password)
* [username](models.kpuser.md#username)

### Methods

* [getUser](models.kpuser.md#static-getuser)
* [userExists](models.kpuser.md#static-userexists)

## Constructors

###  constructor

\+ **new KPUser**(`username`: string, `password`: string, `isAdmin`: boolean): *[KPUser](models.kpuser.md)*

*Defined in [src/models/KPUser.ts:44](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L44)*

Creates a new KPUser with the given parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`username` | string | The username. |
`password` | string | The encrypted password. |
`isAdmin` | boolean | Is admin?  |

**Returns:** *[KPUser](models.kpuser.md)*

## Properties

###  isAdmin

• **isAdmin**: *boolean*

*Defined in [src/models/KPUser.ts:44](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L44)*

Indicates, whether or not the user is an administrator.

___

###  password

• **password**: *string*

*Defined in [src/models/KPUser.ts:40](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L40)*

The password. (BCrypt encrypted)

___

###  username

• **username**: *string*

*Defined in [src/models/KPUser.ts:36](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L36)*

The username.

## Methods

### `Static` getUser

▸ **getUser**(`uname`: string, `cb`: [GetUserCallback](../modules/models.md#getusercallback)): *void*

*Defined in [src/models/KPUser.ts:65](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L65)*

Retrieves a user from the MySQL database, if possible. In case the
target user is not found, a [`NoUserFoundError`](errors.nouserfounderror.md) will
be passed to the callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uname` | string | The target username. |
`cb` | [GetUserCallback](../modules/models.md#getusercallback) | The callback.  |

**Returns:** *void*

___

### `Static` userExists

▸ **userExists**(`uname`: string, `cb`: [UserExistsCallback](../modules/models.md#userexistscallback)): *void*

*Defined in [src/models/KPUser.ts:86](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPUser.ts#L86)*

Checks whether or not a user with the given attributes exists in the database.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uname` | string | The target username. |
`cb` | [UserExistsCallback](../modules/models.md#userexistscallback) | The callback.  |

**Returns:** *void*
