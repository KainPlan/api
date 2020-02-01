export default class InvalidBeaconFormatError extends Error {
  constructor(msg: string = 'Invalid beacon format!') {
    super(msg);
    Object.setPrototypeOf(this, InvalidBeaconFormatError.prototype);
  }
}