export default class NoUserFoundError extends Error {
  constructor(msg: string = 'No user found!') {
    super(msg);
    Object.setPrototypeOf(this, NoUserFoundError.prototype);
  }
}