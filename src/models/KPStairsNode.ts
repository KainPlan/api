import KPNode from "./KPNode";
import { InvalidNodeFormatError } from "../errors";

export default class KPStairsNode extends KPNode {
  floor: number;
  stairs: KPNode;

  constructor(x: number, y: number, floor: number, edges?: KPNode[], stairs?: KPNode) {
    super(x, y, edges);
    this.floor = floor;
    this.stairs = stairs || null;
  }

  static parse(json: any): KPStairsNode {
    if (typeof json === 'string') json = JSON.parse(json);
    const nudeNode: KPNode = KPNode.parse(json);
    if (typeof json.floor !== 'number') throw new InvalidNodeFormatError();
    return new KPStairsNode(nudeNode.x, nudeNode.y, json.floor);
  }

  parseEdges(json: any, nodes: KPNode[], allNodes: KPNode[][]): void {
    super.parseEdges(json, nodes);
    if (typeof json.stairs !== 'number') throw new InvalidNodeFormatError();
    this.stairs = allNodes[this.floor][json.stairs];
    this.edges = [ this.stairs, ...this.edges ];
  }

  toJSON(nodes: KPNode[], allNodes: KPNode[][]): any {
    return {
      ...this,
      _type: 'KPStairsNode',
      edges: this.edges.slice(1).map(e => nodes.indexOf(e)),
      stairs: allNodes[this.floor].indexOf(this.stairs),
    };
  }
}