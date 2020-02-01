/**
 * @packageDocumentation
 * @module models
 */

import { InvalidNodeFormatError } from "../errors";

export default class KPNode {
  x: number;
  y: number;
  edges: KPNode[];

  constructor(x: number, y: number, edges?: KPNode[]) {
    this.x = x;
    this.y = y;
    this.edges = edges || [];
  }

  static parse(json: any): KPNode {
    if (typeof json === 'string') json = JSON.parse(json);
    if (
      typeof json.x !== 'number'
      || typeof json.y !== 'number'
    ) throw new InvalidNodeFormatError();
    return new KPNode(json.x, json.y);
  }

  parseEdges(json: any, nodes: KPNode[], allNodes?: KPNode[][]): void {
    if (typeof json === 'string') json = JSON.parse(json);
    if (
      !Array.isArray(json.edges)
      || !json.edges.every((s: number) => typeof s === 'number')
    ) throw new InvalidNodeFormatError();
    this.edges = json.edges.map((e: number) => nodes[e]);
  }

  toJSON(nodes: KPNode[], allNodes?: KPNode[][]): any {
    return {
      ...this,
      _type: 'KPNode',
      edges: this.edges.map(e => nodes.indexOf(e)),
    };
  }
}