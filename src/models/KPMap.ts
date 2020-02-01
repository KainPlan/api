/**
 * @packageDocumentation
 * @module models
 */

import { InvalidMapFormatError, InvalidNodeFormatError, InvalidBeaconFormatError } from '../errors';
import KPNode from './KPNode';
import KPBeacon from './KPBeacon';
import { KPStairsNode, KPEndNode } from '.';

export default class KPMap {
  version: string;
  width: number;
  height: number;
  background: string[];
  nodes: KPNode[][];
  beacons: KPBeacon[][];

  constructor(version: string, width: number, height: number, background: string[], nodes?: KPNode[][], beacons?: KPNode[][]) {
    if (version == null) throw new InvalidMapFormatError();
    this.version = version;
    this.width = width;
    this.height= height;
    this.background = background;
    this.nodes = nodes || background && new Array(background.length).fill(null).map(() => []) || null;
    this.beacons = beacons || background && new Array(background.length).fill(null).map(() => []) || null;
  }

  static parse(json: any): KPMap {
    if (!json) throw new InvalidMapFormatError();
    if (typeof json === 'string') json = JSON.parse(json);
    if (
      typeof json.width !== 'number'
      || typeof json.height !== 'number'
      || !Array.isArray(json.background)
      || !json.background.every((s: string) => typeof s === 'string')
      || !Array.isArray(json.nodes)
      || !json.nodes.every((l: any[]) => Array.isArray(l))
      || !Array.isArray(json.beacons)
      || !json.beacons.every((l: any[]) => Array.isArray(l))
      || json.background.length !== json.nodes.length
      || json.background.length !== json.beacons.length
    ) throw new InvalidMapFormatError();
    const retMap = new KPMap(json.version, json.width, json.height, json.background);
    try {
      for (let l: number = 0; l < json.background.length; l++) {
        json.nodes[l].forEach((n: any) => {
          let node: KPNode;
          if (typeof n._type !== 'string') throw new InvalidNodeFormatError();
          switch (n._type) {
            case 'KPNode':
              node = KPNode.parse(n);
              break;
            case 'KPStairsNode':
              node = KPStairsNode.parse(n);
              break;
            case 'KPEndNode':
              node = KPEndNode.parse(n);
              break;
            default:
              throw new InvalidNodeFormatError();
          }
          retMap.nodes[l].push(node);
        });
        json.beacons[l].forEach((b: any) => retMap.beacons[l].push(KPBeacon.parse(b)));
      }
      for (let l: number = 0; l < json.background.length; l++) {
        for (let i: number = 0; i < retMap.nodes[l].length; i++) {
          retMap.nodes[l][i].parseEdges(json.nodes[l][i], retMap.nodes[l], retMap.nodes);
        }
      }
    } catch (e) {
      if (
        e instanceof InvalidNodeFormatError
        || e instanceof InvalidBeaconFormatError
      ) throw new InvalidMapFormatError();
      throw e;
    }
    return retMap;
  }

  toJSON(): KPMap {
    return {
      ...this,
      nodes: this.nodes.map((ns: KPNode[]) => ns.map((n: KPNode) => n.toJSON(ns, this.nodes))),
    };
  }
};