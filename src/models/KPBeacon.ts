import { InvalidBeaconFormatError } from "../errors";

export default class KPBeacon {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static parse(json: any): KPBeacon {
    if (typeof json === 'string') json = JSON.parse(json);
    if (
      typeof json.x !== 'number'
      || typeof json.y !== 'number'
    ) throw new InvalidBeaconFormatError();
    return new KPBeacon(json.x, json.y);
  }

  toJSON(): KPBeacon {
    return {
      ...this,
    };
  }
}