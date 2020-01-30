export default class InvalidMapFormatError extends Error {
  constructor(msg: string = 'Invalid map format!') {
    super(msg);
    Object.setPrototypeOf(this, InvalidMapFormatError.prototype);
  }
}