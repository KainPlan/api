/**
 * Module for granting DB-access.
 * @packageDocumentation
 * @module db
 * @preferred
 */

import mysql from 'mysql';
import conf from '../config/db.json';

/**
 * The MySQL-Connection-Pool; contains all available connections.
 */
const pool = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.pass,
  database: conf.db,
});

/**
 * 
 */
type GetConnCallback = 
/**
 * 
 * @param err In case an error occurs, it will be passed to the callback function here
 * @param con This will contain the connection to the database, if the action was successful
 */
(err: Error, con: mysql.PoolConnection) => void;

export function getConn(cb: GetConnCallback) {
  pool.getConnection(cb);
}

type ExistsCallback = (err: Error, exists: boolean) => void;
export function exists(query: string, params: any[], cb: ExistsCallback): void {
  getConn((errGet, con) => {
    if (errGet) return cb(errGet, null);
    else {
      con.query(query, params, (errQuery, result) => {
        con.release();
        if (errQuery) return cb(errQuery, null);
        cb(errQuery, result.length > 0);
      });
    }
  });
}