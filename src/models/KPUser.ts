import { getConn, exists } from '../db';
import { NoUserFoundError } from '../errors';

type GetUserCallback = (err: Error, user: KPUser) => void;
type UserExistsCallback = (err: Error, exists: boolean) => void;

export default class KPUser {
  username: string;
  password: string;
  isAdmin: boolean;

  constructor(username: string, password: string, isAdmin: boolean) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }

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
        cb(errQuery, new KPUser(result[0].uname, result[0].pwd, result[0].isAdmin));
      });
    });
  }

  static userExists(uname: string, cb: UserExistsCallback): void {
    exists(`
      SELECT *
      FROM users
      WHERE uname = ?
    `, [ uname ], cb);
  }
};