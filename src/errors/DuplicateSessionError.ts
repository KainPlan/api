/**
 * @packageDocumentation
 * @module errors
 */

/**
 * Indicates a session already exists (identical primary keys). Will be thrown by
 * [[models.KPSession.addSession|KPSession.addSession]] in case of a duplicate entry.
 */
export default class DuplicateSessionError extends Error {
  /**
   * Creates a new DuplicateSessionError with either the message that was passed to it
   * or the default one.
   * @param msg The error message.
   */
  constructor(msg: string = 'No duplicate sessions allowed!') {
    super(msg);
    Object.setPrototypeOf(this, DuplicateSessionError.prototype);
  }
}