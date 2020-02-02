[api](../README.md) › [models](../modules/models.md) › [KPEndNode](models.kpendnode.md)

# Class: KPEndNode

Represent a End-Node in the [KainPlan Map](models.kpmap.md).

End-Points are the nodes a user can actually search for. They represent
important locations in the real world.

## Hierarchy

* [KPNode](models.kpnode.md)

  ↳ **KPEndNode**

## Index

### Constructors

* [constructor](models.kpendnode.md#constructor)

### Properties

* [description](models.kpendnode.md#description)
* [edges](models.kpendnode.md#edges)
* [x](models.kpendnode.md#x)
* [y](models.kpendnode.md#y)

### Methods

* [parseEdges](models.kpendnode.md#parseedges)
* [toJSON](models.kpendnode.md#tojson)
* [parse](models.kpendnode.md#static-parse)

## Constructors

###  constructor

\+ **new KPEndNode**(`x`: number, `y`: number, `description`: string, `edges?`: [KPNode](models.kpnode.md)[]): *[KPEndNode](models.kpendnode.md)*

*Overrides [KPNode](models.kpnode.md).[constructor](models.kpnode.md#constructor)*

*Defined in [src/models/KPEndNode.ts:19](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPEndNode.ts#L19)*

Creates a new KainPlan End-Node

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | X-Coordinate of the End-Point |
`y` | number | Y-Coordinate of the End-Point |
`description` | string | The short description |
`edges?` | [KPNode](models.kpnode.md)[] | Connections to neighbouring nodes  |

**Returns:** *[KPEndNode](models.kpendnode.md)*

## Properties

###  description

• **description**: *string*

*Defined in [src/models/KPEndNode.ts:19](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPEndNode.ts#L19)*

The end-point's short description.

___

###  edges

• **edges**: *[KPNode](models.kpnode.md)[]*

*Inherited from [KPNode](models.kpnode.md).[edges](models.kpnode.md#edges)*

*Defined in [src/models/KPNode.ts:23](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPNode.ts#L23)*

Connections to neighbouring nodes.

___

###  x

• **x**: *number*

*Inherited from [KPNode](models.kpnode.md).[x](models.kpnode.md#x)*

*Defined in [src/models/KPNode.ts:15](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPNode.ts#L15)*

X-Coordinate

___

###  y

• **y**: *number*

*Inherited from [KPNode](models.kpnode.md).[y](models.kpnode.md#y)*

*Defined in [src/models/KPNode.ts:19](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPNode.ts#L19)*

Y-Coordinate

## Methods

###  parseEdges

▸ **parseEdges**(`json`: any, `nodes`: [KPNode](models.kpnode.md)[], `allNodes?`: [KPNode](models.kpnode.md)[][]): *void*

*Inherited from [KPNode](models.kpnode.md).[parseEdges](models.kpnode.md#parseedges)*

*Defined in [src/models/KPNode.ts:56](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPNode.ts#L56)*

Parses the node's edges from the contents of a JSON structure.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | JSON representation of the node. |
`nodes` | [KPNode](models.kpnode.md)[] | All nodes on the same floor. |
`allNodes?` | [KPNode](models.kpnode.md)[][] | All nodes on all floors.  |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(`nodes`: [KPNode](models.kpnode.md)[], `allNodes?`: [KPNode](models.kpnode.md)[][]): *any*

*Overrides [KPNode](models.kpnode.md).[toJSON](models.kpnode.md#tojson)*

*Defined in [src/models/KPEndNode.ts:50](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPEndNode.ts#L50)*

Converts the End-Point into a JSON object - used in `JSON.stringify(...)`.
Uses `KPNode.toJSON(...)`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodes` | [KPNode](models.kpnode.md)[] | All nodes on the same floor |
`allNodes?` | [KPNode](models.kpnode.md)[][] | All nodes on any floor  |

**Returns:** *any*

___

### `Static` parse

▸ **parse**(`json`: any): *[KPEndNode](models.kpendnode.md)*

*Overrides [KPNode](models.kpnode.md).[parse](models.kpnode.md#static-parse)*

*Defined in [src/models/KPEndNode.ts:37](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPEndNode.ts#L37)*

Creates and returns a new KPEndNode from the given JSON object/string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | JSON object/string.  |

**Returns:** *[KPEndNode](models.kpendnode.md)*
