/**
 * @packageDocumentation
 * @module models
 */

import { getConn, exists } from '../db';
import { NoUserFoundError } from '../errors';

/**
 * The callback for the [[KPUser.getUser|`KPUser.getUser`]] method.
 */
type GetUserCallback =
/**
 * @param err   If an error occurred, the callback will receive it here.
 * @param user  The target user.
 */
(err: Error, user: KPUser) => void;

/**
 * The callback for the [[KPUser.userExists|`KPUser.userExists`]] method.
 */
type UserExistsCallback =
/**
 * @param err     If an error occurred, the callback will receive it here.
 * @param exists  Indicates whether or not a match was found.
 */
(err: Error, exists: boolean) => void;

/**
 * Represents a user on a programmatic level.
 */
export default class KPUser {
  /**
   * The username.
   */
  username: string;
  /**
   * The password. (BCrypt encrypted)
   */
  password: string;
  /**
   * Indicates, whether or not the user is an administrator.
   */
  isAdmin: boolean;

  /**
   * Creates a new KPUser with the given parameters.
   * @param username The username.
   * @param password The encrypted password.
   * @param isAdmin Is admin?
   */
  constructor(username: string, password: string, isAdmin: boolean) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  /**
   * Retrieves a user from the MySQL database, if possible. In case the
   * target user is not found, a [[errors.NoUserFoundError|`NoUserFoundError`]] will
   * be passed to the callback.
   * @param uname The target username.
   * @param cb The callback.
   */
  static getUser(uname: string, cb: GetUserCallback): void {
    getConn((errCon, con) => {
      if (errCon) return cb(errCon, null);
      con.query(`
        SELECT *
        FROM users
        WHERE uname = ?
      `, [uname], (errQuery, result) => {
        con.release();
        if (errQuery) return cb(errQuery, null);
        else if (!result[0]) return cb(new NoUserFoundError(), null);
        cb(errQuery, new KPUser(result[0].uname, result[0].pwd, result[0].admin));
      });
    });
  }

  /**
   * Checks whether or not a user with the given attributes exists in the database.
   * @param uname The target username.
   * @param cb The callback.
   */
  static userExists(uname: string, cb: UserExistsCallback): void {
    exists(`
      SELECT *
      FROM users
      WHERE uname = ?
    `, [ uname ], cb);
  }
};