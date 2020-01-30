import { InvalidNodeFormatError } from "../errors";

export default class KPNode {
  x: number;
  y: number;
  edges: string[];
  id: string;

  constructor(x: number, y: number, edges: string[], id: string) {
    this.x = x;
    this.y = y;
    this.edges = edges;
    this.id = id;
  }

  static isValidId(id: string): boolean {
    return id.match(/^[\w\d]{16}$/) !== null;
  }

  static parse(json: any): KPNode {
    if (typeof json === 'string') json = JSON.parse(json);
    if (
      typeof json.x !== 'number'
      || typeof json.y !== 'number'
      || !Array.isArray(json.edges)
      || !json.edges.every((s: string) => typeof s === 'string')
      || typeof json.id !== 'string'
      || !KPNode.isValidId(json.id)
    ) throw new InvalidNodeFormatError();
    return new KPNode(json.x, json.y, json.edges, json.id);
  }
}