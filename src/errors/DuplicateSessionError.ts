export default class DuplicateSessionError extends Error {
  constructor(msg: string = 'No duplicate sessions allowed!') {
    super(msg);
    Object.setPrototypeOf(this, DuplicateSessionError.prototype);
  }
}