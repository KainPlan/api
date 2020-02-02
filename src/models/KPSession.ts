/**
 * @packageDocumentation
 * @module models
 */

import crypto from 'crypto';
import { getConn, exists } from '../db';
import { log } from '../lib';
import conf from '../config/session.json';
import { NoSessionFoundError, DuplicateSessionError } from '../errors';

/**
 * The callback for the [[KPSession.getSession|`KPSession.getSession`]] method.
 */
type GetSessionCallback = 
/**
 * @param err   If an error occurred, the callback will receive it here.
 * @param sess  The target session.
 */
(err: Error, sess: KPSession ) => void;

/**
 * The callback for the [[KPSession.removeSession|`KPSession.removeSession`]] method.
 */
type RemoveSessionCallback = 
/**
 * @param err   If an error occurred, the callback will receive it here.
 */
(err: Error) => void;

/**
 * The callback for the [[KPSession.addSession|`KPSession.addSession`]] method.
 */
type AddSessionCallback = 
/**
 * @param err   If an error occurred, the callback will receive it here.
 */
(err: Error) => void;

/**
 * The callback for the [[KPSession.generateSession|`KPSession.generateSession`]] method.
 */
type GenerateSessionCallback = 
/**
 * @param err   If an error occurred, the callback will receive it here.
 * @param sess  The generated session.
 */
(err: Error, sess: KPSession) => void;

/**
 * The callback for the [[KPSession.useSession|`KPSession.useSession`]] method.
 */
type UseSessionCallback = 
/**
 * @param err   If an error occurred, the callback will receive it here.
 */
(err: Error) => void;

/**
 * The callback for the [[KPSession.sessionExists|`KPSession.sessionExists`]] method.
 */
type SessionExistsCallback = 
/**
 * @param err     If an error occurred, the callback will receive it here.
 * @param exists  Indicates whether or not a match was found.
 */
(err: Error, exists: boolean) => void;

/**
 * The callback for the [[KPSession.deleteTimedOutSessions|`KPSession.deleteTimedOutSessions`]] method.
 */
type DeleteTimedOutSessionsCallback = 
/**
 * @param err     If an error occurred, the callback will receive it here.
 */
(err: Error) => void;

/**
 * Represents a user session on a programmatic level.
 */
export default class KPSession {
  /**
   * The user's IP address; stored for basic XSS-Prevention.
   */
  addr: string;
  /**
   * The user's session token.
   */
  token: string;
  /**
   * The username used in the session.
   */
  uname: string;

  /**
   * Creates a new KainPlan Session with the given parameters.
   * @param addr The user's IP address.
   * @param token The user's session token.
   * @param uname The username.
   */
  constructor(addr: string, token: string, uname: string) {
    this.addr = addr;
    this.token = token;
    this.uname = uname;
  }

  /**
   * Retrieves a user session from the MySQL database, if possible. In case
   * the target session is not found, a [[errors.NoSessionFoundError|`NoSessionFoundError`]] will 
   * be passed to the callback. 
   * @param addr The target IP address.
   * @param token The target session token.
   * @param cb The callback.
   */
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

  /**
   * Will delete the target session if it exists.
   * @param addr The target IP address.
   * @param token The target session token.
   * @param cb The callback.
   */
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

  /**
   * Adds a KainPlan User Session to the database - unless it's already present,
   * in which case the callback will receive a [[errors.DuplicateSessionError|`DuplicateSessionError`]].
   * @param sess The session.
   * @param cb The callback.
   */
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

  /**
   * Creates a new KainPlan User Session with a random 8 Byte token (hex-represenation: 16 chars).
   * @param addr The IP address.
   * @param uname The username.
   * @param cb The callback.
   */
  static generateSession(addr: string, uname: string, cb: GenerateSessionCallback): void {
    const s: KPSession = new KPSession(addr, crypto.randomBytes(8).toString('hex'), uname);
    KPSession.addSession(s, err => {
      if (err instanceof DuplicateSessionError) {
        try {
          return KPSession.generateSession(addr, uname, cb);
        } catch (e) {
          return cb(e, null);
        }
      }
      cb(err, s);
    });
  }

  /**
   * "Uses" a KPSession - updates its timestamp value, in order to prevent it
   * from expiring.
   * @param addr The IP address.
   * @param token The session token.
   * @param cb The callback.
   */
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

  /**
   * Checks whether or not a session with the given attributes exists in the database.
   * @param addr The IP address.
   * @param token The session token.
   * @param cb The callback.
   */
  static sessionExists(addr: string, token: string, cb: SessionExistsCallback): void {
    exists(`
      SELECT *
      FROM sessions
      WHERE ip = ?
            AND token = ?
    `, [ addr, token ], cb);
  }

  /**
   * Removes all "timed-out" user sessions from the database.
   * @param timeout The timeout [minutes].
   * @param cb The callback.
   */
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

  /**
   * Starts deleting all "timed-out" sessions as specified in the
   * `config/session.json` configuration file.
   * @param verbose Should a notification be logged at `info` level.
   */
  static async startTimeoutLoop(verbose: boolean = true) {
    setInterval(() => {
      if (verbose) log.info('[MYSQL-DB]> Deleting timed-out sessions ... now ... ');
      KPSession.deleteTimedOutSessions();
    }, conf.check_timeout*1000*60);
  }
}