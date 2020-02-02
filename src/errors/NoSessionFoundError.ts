/**
 * @packageDocumentation
 * @module errors
 */

/**
 * Caused by a request using an expired/invalid token. ([[models.KPSession.getSession|`KPSession.getSession`]]).
 */
export default class NoSessionFoundError extends Error {
  /**
   * Creates a new NoSessionFoundError - normally with the default error message.
   * @param msg The error message.
   */
  constructor(msg: string = 'No session found!') {
    super(msg);
    Object.setPrototypeOf(this, NoSessionFoundError.prototype);
  }
}