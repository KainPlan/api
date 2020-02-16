[api](../README.md) › [models](../modules/models.md) › [KPNode](models.kpnode.md)

# Class: KPNode

Represents a Node stored in the [KainPlan Map](models.kpmap.md).

## Hierarchy

* **KPNode**

  ↳ [KPStairsNode](models.kpstairsnode.md)

  ↳ [KPEndNode](models.kpendnode.md)

## Index

### Constructors

* [constructor](models.kpnode.md#constructor)

### Properties

* [edges](models.kpnode.md#edges)
* [x](models.kpnode.md#x)
* [y](models.kpnode.md#y)

### Methods

* [parseEdges](models.kpnode.md#parseedges)
* [toJSON](models.kpnode.md#tojson)
* [parse](models.kpnode.md#static-parse)

## Constructors

###  constructor

\+ **new KPNode**(`x`: number, `y`: number, `edges?`: [KPNode](models.kpnode.md)[]): *[KPNode](models.kpnode.md)*

*Defined in [src/models/KPNode.ts:23](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L23)*

Creates a new KPNode with the given parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | X-Coordinate |
`y` | number | Y-Coordinate |
`edges?` | [KPNode](models.kpnode.md)[] | Connections to other nodes.  |

**Returns:** *[KPNode](models.kpnode.md)*

## Properties

###  edges

• **edges**: *[KPNode](models.kpnode.md)[]*

*Defined in [src/models/KPNode.ts:23](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L23)*

Connections to neighbouring nodes.

___

###  x

• **x**: *number*

*Defined in [src/models/KPNode.ts:15](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L15)*

X-Coordinate

___

###  y

• **y**: *number*

*Defined in [src/models/KPNode.ts:19](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L19)*

Y-Coordinate

## Methods

###  parseEdges

▸ **parseEdges**(`json`: any, `nodes`: [KPNode](models.kpnode.md)[], `allNodes?`: [KPNode](models.kpnode.md)[][]): *void*

*Defined in [src/models/KPNode.ts:56](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L56)*

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

*Defined in [src/models/KPNode.ts:71](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L71)*

Converts the node to its JSON representation.
(Neighbour-Nodes replaced with their respective indices)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodes` | [KPNode](models.kpnode.md)[] | All nodes on the same floor. |
`allNodes?` | [KPNode](models.kpnode.md)[][] | All nodes on all floors.  |

**Returns:** *any*

___

### `Static` parse

▸ **parse**(`json`: any): *[KPNode](models.kpnode.md)*

*Defined in [src/models/KPNode.ts:41](https://github.com/KainPlan/api/blob/1c0199f/src/models/KPNode.ts#L41)*

Creates a new KPNode from the given JSON object/string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | JSON Object/String.  |

**Returns:** *[KPNode](models.kpnode.md)*
