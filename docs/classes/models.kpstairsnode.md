[api](../README.md) › [models](../modules/models.md) › [KPStairsNode](models.kpstairsnode.md)

# Class: KPStairsNode

Represents a Stairs-Node in the [KainPlan Map](models.kpmap.md).

Stairs-Nodes represent staircases in the real world. They are the
only nodes that can have connections to nodes on other floors.

## Hierarchy

* [KPNode](models.kpnode.md)

  ↳ **KPStairsNode**

## Index

### Constructors

* [constructor](models.kpstairsnode.md#constructor)

### Properties

* [edges](models.kpstairsnode.md#edges)
* [floor](models.kpstairsnode.md#floor)
* [stairs](models.kpstairsnode.md#stairs)
* [x](models.kpstairsnode.md#x)
* [y](models.kpstairsnode.md#y)

### Methods

* [parseEdges](models.kpstairsnode.md#parseedges)
* [toJSON](models.kpstairsnode.md#tojson)
* [parse](models.kpstairsnode.md#static-parse)

## Constructors

###  constructor

\+ **new KPStairsNode**(`x`: number, `y`: number, `floor`: number, `edges?`: [KPNode](models.kpnode.md)[], `stairs?`: [KPNode](models.kpnode.md)): *[KPStairsNode](models.kpstairsnode.md)*

*Overrides [KPNode](models.kpnode.md).[constructor](models.kpnode.md#constructor)*

*Defined in [src/models/KPStairsNode.ts:23](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPStairsNode.ts#L23)*

Creates a new KainPlan Stairs-Node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The X-Coordinate of the staircase. |
`y` | number | The Y-Coordinate of the staircase. |
`floor` | number | The other floor. |
`edges?` | [KPNode](models.kpnode.md)[] | The connections to neighbouring nodes. |
`stairs?` | [KPNode](models.kpnode.md) | The other end of the staircase.  |

**Returns:** *[KPStairsNode](models.kpstairsnode.md)*

## Properties

###  edges

• **edges**: *[KPNode](models.kpnode.md)[]*

*Inherited from [KPNode](models.kpnode.md).[edges](models.kpnode.md#edges)*

*Defined in [src/models/KPNode.ts:23](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPNode.ts#L23)*

Connections to neighbouring nodes.

___

###  floor

• **floor**: *number*

*Defined in [src/models/KPStairsNode.ts:19](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPStairsNode.ts#L19)*

The floor on which the other end of the staircase is situated.

___

###  stairs

• **stairs**: *[KPNode](models.kpnode.md)*

*Defined in [src/models/KPStairsNode.ts:23](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPStairsNode.ts#L23)*

The other end of the staircase.

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

▸ **parseEdges**(`json`: any, `nodes`: [KPNode](models.kpnode.md)[], `allNodes`: [KPNode](models.kpnode.md)[][]): *void*

*Overrides [KPNode](models.kpnode.md).[parseEdges](models.kpnode.md#parseedges)*

*Defined in [src/models/KPStairsNode.ts:56](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPStairsNode.ts#L56)*

Parse's the Stairs-Node's edges from the contents of a JSON structure.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | JSON representation of a KPStairsNode. |
`nodes` | [KPNode](models.kpnode.md)[] | All nodes on the same floor. |
`allNodes` | [KPNode](models.kpnode.md)[][] | All nodes on all floors.  |

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(`nodes`: [KPNode](models.kpnode.md)[], `allNodes`: [KPNode](models.kpnode.md)[][]): *any*

*Overrides [KPNode](models.kpnode.md).[toJSON](models.kpnode.md#tojson)*

*Defined in [src/models/KPStairsNode.ts:69](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPStairsNode.ts#L69)*

Converts the Stairs-Node to its JSON representation.
(Neighbour-Nodes replaced with their respective indices)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodes` | [KPNode](models.kpnode.md)[] | All nodes on the same floor. |
`allNodes` | [KPNode](models.kpnode.md)[][] | All nodes on any floor.  |

**Returns:** *any*

___

### `Static` parse

▸ **parse**(`json`: any): *[KPStairsNode](models.kpstairsnode.md)*

*Overrides [KPNode](models.kpnode.md).[parse](models.kpnode.md#static-parse)*

*Defined in [src/models/KPStairsNode.ts:43](https://github.com/KainPlan/api/blob/3eeae78/src/models/KPStairsNode.ts#L43)*

Creates and returns a new KPStairsNode from the given JSON object/string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`json` | any | JSON object/string.  |

**Returns:** *[KPStairsNode](models.kpstairsnode.md)*
