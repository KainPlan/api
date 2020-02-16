[api](../README.md) › [models](../modules/models.md) › [KPMap](models.kpmap.md)

# Class: KPMap

Represents a Map in Project KainPlan. Contains all the information needed
to digitally represent a physical location.

## Hierarchy

* **KPMap**

## Index

### Constructors

* [constructor](models.kpmap.md#constructor)

### Properties

* [background](models.kpmap.md#background)
* [beacons](models.kpmap.md#beacons)
* [height](models.kpmap.md#height)
* [nodes](models.kpmap.md#nodes)
* [scale](models.kpmap.md#scale)
* [version](models.kpmap.md#version)
* [width](models.kpmap.md#width)

### Methods

* [toJSON](models.kpmap.md#tojson)
* [parse](models.kpmap.md#static-parse)

## Constructors

###  constructor

\+ **new KPMap**(`version`: string, `width`: number, `height`: number, `scale`: number, `background`: string[], `nodes?`: [KPNode](models.kpnode.md)[][], `beacons?`: [KPBeacon](models.kpbeacon.md)[][]): *[KPMap](models.kpmap.md)*

*Defined in [src/models/KPMap.ts:45](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L45)*

Creates a new KainPlan Map with the given parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`version` | string | The map's version. |
`width` | number | The map's width. |
`height` | number | The map's height. |
`scale` | number | The map's scale. |
`background` | string[] | The map's background sources. |
`nodes?` | [KPNode](models.kpnode.md)[][] | The map's nodes. |
`beacons?` | [KPBeacon](models.kpbeacon.md)[][] | The map's beacons.  |

**Returns:** *[KPMap](models.kpmap.md)*

## Properties

###  background

• **background**: *string[]*

*Defined in [src/models/KPMap.ts:35](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L35)*

The background images URIs. (all images should be of the same size)

___

###  beacons

• **beacons**: *[KPBeacon](models.kpbeacon.md)[][]*

*Defined in [src/models/KPMap.ts:45](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L45)*

Contains virtual represenations of the beacons placed in the facility.
They are used for user-positioning.

___

###  height

• **height**: *number*

*Defined in [src/models/KPMap.ts:27](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L27)*

The map's height (should be the height of the background-images)

___

###  nodes

• **nodes**: *[KPNode](models.kpnode.md)[][]*

*Defined in [src/models/KPMap.ts:40](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L40)*

All nodes required for path finding. Contains [Intermediary Nodes](models.kpnode.md),
[Staircases](models.kpstairsnode.md) and [End-Points](models.kpendnode.md).

___

###  scale

• **scale**: *number*

*Defined in [src/models/KPMap.ts:31](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L31)*

The map's scale (m/pixel)

___

###  version

• **version**: *string*

*Defined in [src/models/KPMap.ts:19](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L19)*

The map's version

___

###  width

• **width**: *number*

*Defined in [src/models/KPMap.ts:23](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L23)*

The map's with (should be the width of the background-images)

## Methods

###  toJSON

▸ **toJSON**(): *any*

*Defined in [src/models/KPMap.ts:132](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L132)*

Converts the map into its JSON representation - used when writing the map to a file, etc.
Uses the nodes'/beacons' `toJSON(...)` methods with the required parameters.

**Returns:** *any*

___

### `Static` parse

▸ **parse**(`json`: any): *[KPMap](models.kpmap.md)*

*Defined in [src/models/KPMap.ts:74](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPMap.ts#L74)*

Creates and returns a new KainPlan Map from the given JSON object/string.
Useful for parsing files, etc. It will, in turn, use the subsequent
`parse(...)` methods the nodes/beacons provide.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | JSON object/string.  |

**Returns:** *[KPMap](models.kpmap.md)*
