/**
 * @packageDocumentation
 * @module errors
 */

/**
 * The Error 404 of Map I/O. Shouldn't usually, but can occur in [[controllers/api.getDefaultMap|`controllers/api.getDefaultMap`]].
 * Will more regularly be thrown by [[lib/io.readRawMap|`lib/io.readRawMap`]] - in case the specified map isn't found.
 */
export default class MapNotFoundError extends Error {
  /**
   * Creates a new MapNotFoundError - normally with the default error message.
   * @param msg The error message.
   */
  constructor(msg: string = 'Map couldn\'t be found!') {
    super(msg);
    Object.setPrototypeOf(this, MapNotFoundError.prototype);
  }
}