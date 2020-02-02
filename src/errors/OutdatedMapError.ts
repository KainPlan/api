/**
 * @packageDocumentation
 * @module errors
 */

/**
 * Caused by trying to override an old map with a new one that has, however,
 * a lower version number. Only occurs in [[lib/io.writeMap|`lib/io.writeMap`]].
 */
export default class OutdatedMapError extends Error {
  /**
   * Creates a new OutdatedMapError with the given/default error message.
   * @param msg The error message.
   */
  constructor(msg: string = 'Outdated map (version too old)!') {
    super(msg);
    Object.setPrototypeOf(this, OutdatedMapError.prototype);
  }
}