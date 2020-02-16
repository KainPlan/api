[api](../README.md) › [models](../modules/models.md) › [KPBeacon](models.kpbeacon.md)

# Class: KPBeacon

Represents a Beacon stored in the [KainPlan Map](models.kpmap.md).

## Hierarchy

* **KPBeacon**

## Index

### Constructors

* [constructor](models.kpbeacon.md#constructor)

### Properties

* [x](models.kpbeacon.md#x)
* [y](models.kpbeacon.md#y)

### Methods

* [toJSON](models.kpbeacon.md#tojson)
* [parse](models.kpbeacon.md#static-parse)

## Constructors

###  constructor

\+ **new KPBeacon**(`x`: number, `y`: number): *[KPBeacon](models.kpbeacon.md)*

*Defined in [src/models/KPBeacon.ts:19](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPBeacon.ts#L19)*

Creates a new KainPlan Beacon.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | X-Coordinate of the Beacon |
`y` | number | Y-Coordinate of the Beacon  |

**Returns:** *[KPBeacon](models.kpbeacon.md)*

## Properties

###  x

• **x**: *number*

*Defined in [src/models/KPBeacon.ts:15](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPBeacon.ts#L15)*

X-Coordinate

___

###  y

• **y**: *number*

*Defined in [src/models/KPBeacon.ts:19](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPBeacon.ts#L19)*

Y-Coordinate

## Methods

###  toJSON

▸ **toJSON**(): *any*

*Defined in [src/models/KPBeacon.ts:49](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPBeacon.ts#L49)*

Converts the Beacon into a JSON object - will be called when using `JSON.stringify(...)`

**Returns:** *any*

The Beacon in its JSON form.

___

### `Static` parse

▸ **parse**(`json`: any): *[KPBeacon](models.kpbeacon.md)*

*Defined in [src/models/KPBeacon.ts:36](https://github.com/KainPlan/api/blob/b101ea0/src/models/KPBeacon.ts#L36)*

Creates and returns a new KPBeacon from the given JSON object/string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | Either an object that has already been parsed, or a JSON string. |

**Returns:** *[KPBeacon](models.kpbeacon.md)*

The newly created KPBeacon.
