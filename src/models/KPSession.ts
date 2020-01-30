import crypto from 'crypto';
import { getConn, exists } from '../db';
import { log } from '../lib';
import conf from '../config/session.json';
import { NoSessionFoundError, DuplicateSessionError } from '../errors';

type GetSessionCallback = (err: Error, sess: KPSession ) => void;
type RemoveSessionCallback = (err: Error) => void;
type AddSessionCallback = (err: Error) => void;
type GenerateSessionCallback = (err: Error, sess: KPSession) => void;
type UseSessionCallback = (err: Error) => void;
type SessionExistsCallback = (err: Error, exists: boolean) => void;
type DeleteTimedOutSessionsCallback = (err: Error) => void;

export default class KPSession {
  addr: string;
  token: string;
  uname: string;

  constructor(addr: string, token: string, uname: string) {
    this.addr = addr;
    this.token = token;
    this.uname = uname;
  }

  static getSession(addr: string, token: string, cb: GetSessionCallback): void {
    getConn((errConn, con) => {
      if (errConn) return cb(errConn, null);
      con.query(`
        SELECT ip, token, uname, TIMESTAMPDIFF(MINUTE, timestamp, NOW()) "min"
        FROM sessions
        WHERE ip = ?
              AND token = ?
      `, [addr, token], (errQuery, result) => {
        con.release();
        if (errQuery) return cb(errQuery, null);
        else if (!result[0]) return cb(new NoSessionFoundError(), null);
        else if (result[0].min >= conf.timeout) return KPSession.removeSession(addr, token, err => cb(err, null));
        cb(errQuery, result[0]);
      });
    });
  }

  static removeSession(addr: string, token: string, cb: RemoveSessionCallback): void {
    getConn((errCon, con) => {
      if (errCon) return cb(errCon);
      con.query(`
        DELETE FROM sessions
        WHERE ip = ?
              AND token = ?
      `, [addr, token], errQuery => {
        con.release();
        cb(errQuery);
      });
    });
  }

  static addSession(sess: KPSession, cb: AddSessionCallback): void {
    KPSession.getSession(sess.addr, sess.token, (errGet, s) => {
      if (!(errGet instanceof NoSessionFoundError)) return cb(errGet);
      else if (s) return cb(new DuplicateSessionError());
      getConn((errCon, con) => {
        if (errCon) return cb(errCon);
        con.query(`
          INSERT INTO sessions (ip, token, uname)
                      VALUES (?, ?, ?)
        `, [sess.addr, sess.token, sess.uname], errQuery => {
          con.release();
          cb(errQuery);
        });
      });
    });
  }

  static generateSession(addr: string, uname: string, cb: GenerateSessionCallback): void {
    const s: KPSession = new KPSession(addr, crypto.randomBytes(8).toString('hex'), uname);
    KPSession.addSession(s, err => {
      if (err instanceof DuplicateSessionError) return KPSession.generateSession(addr, uname, cb);
      cb(err, s);
    });
  }

  static useSession(addr: string, token: string, cb: UseSessionCallback): void {
    getConn((errCon, con) => {
      if (errCon) return cb(errCon);
      con.query(`
        UPDATE sessions
        SET timestamp = NOW()
        WHERE ip = ?
              AND token = ?
      `, [addr, token], errQuery => {
        con.release();
        cb(errQuery);
      });
    });
  }

  static sessionExists(addr: string, token: string, cb: SessionExistsCallback): void {
    exists(`
      SELECT *
      FROM sessions
      WHERE ip = ?
            AND token = ?
    `, [ addr, token ], cb);
  }

  static deleteTimedOutSessions(timeout: number = conf.timeout, cb: DeleteTimedOutSessionsCallback = (err) => undefined): void {
    getConn((errCon, con) => {
      if (errCon) return cb(errCon);
      con.query(`
        DELETE FROM sessions
        WHERE TIMESTAMPDIFF(MINUTE, timestamp, NOW()) >= ?
      `, [timeout], errQuery => {
        con.release();
        cb(errQuery);
      });
    });
  }

  static async startTimeoutLoop(verbose: boolean = true) {
    setInterval(() => {
      log.info('[MYSQL-DB]> Deleting timed-out sessions ... now ... ');
      KPSession.deleteTimedOutSessions();
    }, conf.check_timeout*1000*60);
  }
}