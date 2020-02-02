/**
 * @packageDocumentation
 * @module errors
 */

/**
 * Caused by querying for a non-existent user. Will be thrown in [[models.KPUser.getUser|`KPUser.getUser`]].
 */
export default class NoUserFoundError extends Error {
  /**
   * Returns a new NoUserFoundError - usually with the default error message.
   * @param msg The error message.
   */
  constructor(msg: string = 'No user found!') {
    super(msg);
    Object.setPrototypeOf(this, NoUserFoundError.prototype);
  }
}