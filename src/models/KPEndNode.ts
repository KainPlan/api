import KPNode from "./KPNode";
import { InvalidNodeFormatError } from "../errors";

export default class KPEndNode extends KPNode {
  description: string;

  constructor(x: number, y: number, description: string, edges?: KPNode[]) {
    super(x, y, edges);
    this.description = description;
  }

  static parse(json: any): KPEndNode {
    if (typeof json === 'string') json = JSON.parse(json);
    const nudeNode: KPNode = KPNode.parse(json);
    if (typeof json.description !== 'string') throw new InvalidNodeFormatError();
    return new KPEndNode(nudeNode.x, nudeNode.y, json.description);
  }

  toJSON(nodes: KPNode[], allNodes?: KPNode[][]): any {
    return {
      ...super.toJSON(nodes),
      _type: 'KPEndNode',
    };
  }
}