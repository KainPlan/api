/**
 * @packageDocumentation
 * @module errors
 */

export default class MapNotFoundError extends Error {
  constructor(msg: string = 'Map couldn\'t be found!') {
    super(msg);
    Object.setPrototypeOf(this, MapNotFoundError.prototype);
  }
}