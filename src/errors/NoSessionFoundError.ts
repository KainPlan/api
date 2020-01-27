export default class NoSessionFoundError extends Error {
  constructor(msg: string = 'No session found!') {
    super(msg);
    Object.setPrototypeOf(this, NoSessionFoundError.prototype);
  }
}