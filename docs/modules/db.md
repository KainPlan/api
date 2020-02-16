[api](../README.md) › [db](db.md)

# External module: db

Module for granting DB-access.

## Index

### Type aliases

* [ExistsCallback](db.md#existscallback)
* [GetConnCallback](db.md#getconncallback)

### Variables

* [pool](db.md#const-pool)

### Functions

* [exists](db.md#exists)
* [getConn](db.md#getconn)

### Object literals

* [conf](db.md#let-conf)

## Type aliases

###  ExistsCallback

Ƭ **ExistsCallback**: *function*

*Defined in [src/db/index.ts:58](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L58)*

Callback for the [exists](db.md#exists) function.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `exists`: boolean): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | In case an error occurs, it will be passed to the callback function here. |
`exists` | boolean | Did the provided query yield a match?  |

___

###  GetConnCallback

Ƭ **GetConnCallback**: *function*

*Defined in [src/db/index.ts:39](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L39)*

Callback for the [getConn](db.md#getconn) function.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `con`: PoolConnection): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | In case an error occurs, it will be passed to the callback function here. |
`con` | PoolConnection | This will contain the connection to the database, if the action was successful.  |

## Variables

### `Const` pool

• **pool**: *Pool* = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.pass,
  database: conf.db,
})

*Defined in [src/db/index.ts:29](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L29)*

This MySQL-Connection-Pool provides access to the database. It uses the credentials from `src/config/db.json` to connect.

## Functions

###  exists

▸ **exists**(`query`: string, `params`: any[], `cb`: [ExistsCallback](db.md#existscallback)): *void*

*Defined in [src/db/index.ts:71](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L71)*

Checks if a given query yields any results.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`query` | string | The MySQL-Query to-be-tested. |
`params` | any[] | Any parameters that should be passed to the query (escaped parameters: `?`) |
`cb` | [ExistsCallback](db.md#existscallback) | The callback.  |

**Returns:** *void*

___

###  getConn

▸ **getConn**(`cb`: [GetConnCallback](db.md#getconncallback)): *void*

*Defined in [src/db/index.ts:51](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L51)*

Gets a connection to the MySQL database (selected from the [pool](db.md#const-pool))

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | [GetConnCallback](db.md#getconncallback) | The callback.  |

**Returns:** *void*

## Object literals

### `Let` conf

### ▪ **conf**: *object*

*Defined in [src/db/index.ts:13](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L13)*

###  db

• **db**: *string* = ""

*Defined in [src/db/index.ts:17](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L17)*

###  host

• **host**: *string* = ""

*Defined in [src/db/index.ts:14](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L14)*

###  pass

• **pass**: *string* = ""

*Defined in [src/db/index.ts:16](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L16)*

###  user

• **user**: *string* = ""

*Defined in [src/db/index.ts:15](https://github.com/KainPlan/api/blob/b101ea0/src/db/index.ts#L15)*
