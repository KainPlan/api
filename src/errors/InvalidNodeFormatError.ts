/**
 * @packageDocumentation
 * @module errors
 */

export default class InvalidNodeFormatError extends Error {
  constructor(msg: string = 'Invalid node format!') {
    super(msg);
    Object.setPrototypeOf(this, InvalidNodeFormatError.prototype);
  }
}