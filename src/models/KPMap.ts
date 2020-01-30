import { InvalidMapFormatError } from '../errors';
import KPNode from './KPNode';
import KPBeacon from './KPBeacon';

export default class KPMap {
  version: string;
  width: number;
  height: number;
  background: string[];
  nodes: KPNode[][];
  beacons: KPNode[][];

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
    for (let l: number = 0; l < json.background.length; l++) {
      json.nodes[l].forEach((n: any) => retMap.nodes[l].push(KPNode.parse(n)));
      json.beacons[l].forEach((b: any) => retMap.beacons[l].push(KPBeacon.parse(b)));
    }
    return retMap;
  }
};