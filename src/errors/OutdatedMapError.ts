/**
 * @packageDocumentation
 * @module errors
 */

export default class OutdatedMapError extends Error {
  constructor(msg: string = 'Outdated map (version too old)!') {
    super(msg);
    Object.setPrototypeOf(this, OutdatedMapError.prototype);
  }
}