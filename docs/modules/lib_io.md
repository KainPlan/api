[api](../README.md) › [lib/io](lib_io.md)

# External module: lib/io

## Index

### Type aliases

* [ReadMapCallback](lib_io.md#readmapcallback)
* [ReadRawMapCallback](lib_io.md#readrawmapcallback)
* [WriteMapCallback](lib_io.md#writemapcallback)

### Functions

* [getMapPath](lib_io.md#getmappath)
* [readMap](lib_io.md#readmap)
* [readRawMap](lib_io.md#readrawmap)
* [writeMap](lib_io.md#writemap)

## Type aliases

###  ReadMapCallback

Ƭ **ReadMapCallback**: *function*

*Defined in [src/lib/io.ts:27](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L27)*

Callback for the [`lib/io.readMap`](lib_io.md#readmap) function.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `map`: [KPMap](../classes/models.kpmap.md)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred whilst reading, the callback will receive it here. |
`map` | [KPMap](../classes/models.kpmap.md) | If the map has been retrieved successfully, the callback will be able to access it here.  |

___

###  ReadRawMapCallback

Ƭ **ReadRawMapCallback**: *function*

*Defined in [src/lib/io.ts:53](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L53)*

Callback for the [`lib/io.readRawMap`](lib_io.md#readrawmap) function.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error), `map`: string): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred whilst reading, the callback will receive it here. |
`map` | string | The retrieved map in raw JSON format.  |

___

###  WriteMapCallback

Ƭ **WriteMapCallback**: *function*

*Defined in [src/lib/io.ts:77](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L77)*

Callback for the [`lib/io.writeMap`](lib_io.md#writemap) function.

#### Type declaration:

▸ (`err`: [Error](../classes/errors.duplicatesessionerror.md#static-error)): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | [Error](../classes/errors.duplicatesessionerror.md#static-error) | If an error occurred whilst reading, the callback will receive it here.  |

## Functions

###  getMapPath

▸ **getMapPath**(`mapName`: string): *string*

*Defined in [src/lib/io.ts:18](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L18)*

Will return the absolute path to a given map-name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapName` | string | The name of a map. |

**Returns:** *string*

The absolute path.

___

###  readMap

▸ **readMap**(`mapName`: string, `cb`: [ReadMapCallback](lib_io.md#readmapcallback)): *void*

*Defined in [src/lib/io.ts:39](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L39)*

Reads a [`KPMap`](../classes/models.kpmap.md) from its `xxx.map.json` file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapName` | string | The name of a map. |
`cb` | [ReadMapCallback](lib_io.md#readmapcallback) | The callback.  |

**Returns:** *void*

___

###  readRawMap

▸ **readRawMap**(`mapName`: string, `cb`: [ReadRawMapCallback](lib_io.md#readrawmapcallback)): *void*

*Defined in [src/lib/io.ts:65](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L65)*

Reads the raw JSON representation of a [`KPMap`](../classes/models.kpmap.md) from its `xxx.map.json` file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapName` | string | The name of a map. |
`cb` | [ReadRawMapCallback](lib_io.md#readrawmapcallback) | The callback.  |

**Returns:** *void*

___

###  writeMap

▸ **writeMap**(`mapName`: string, `map`: [KPMap](../classes/models.kpmap.md), `cb`: [WriteMapCallback](lib_io.md#writemapcallback)): *void*

*Defined in [src/lib/io.ts:89](https://github.com/KainPlan/api/blob/b101ea0/src/lib/io.ts#L89)*

Writes a given map to the `xxx.map.json` file of the given name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapName` | string | The name of a map. |
`map` | [KPMap](../classes/models.kpmap.md) | A KPMap object. |
`cb` | [WriteMapCallback](lib_io.md#writemapcallback) | The callback.  |

**Returns:** *void*
