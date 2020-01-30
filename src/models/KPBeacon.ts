import KPNode from "./KPNode";
import { InvalidNodeFormatError } from "../errors";

export default class KPBeacon extends KPNode {
  constructor(x: number, y: number, edges: string[], id: string) {
    super(x, y, edges, id);
  }

  static isValidId(id: string): boolean {
    return id.match(/^b;\d+(\.\d+)?;\d+(\.\d+)?;\d+$/) !== null;
  }

  static parse(json: any): KPNode {
    if (typeof json === 'string') json = JSON.parse(json);
    if (
      typeof json.x !== 'number'
      || typeof json.y !== 'number'
      || !Array.isArray(json.edges)
      || !json.edges.every((s: string) => typeof s === 'string')
      || typeof json.id !== 'string'
      || !KPBeacon.isValidId(json.id)
    ) throw new InvalidNodeFormatError();
    return new KPNode(json.x, json.y, json.edges, json.id);
  }
}