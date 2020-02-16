/**
 * Module for granting DB-access.
 * @packageDocumentation
 * @module db
 * @preferred
 */

import mysql from 'mysql';
import fs from 'fs';
import path from 'path';
import log from '../lib/log';

let conf = {
  host: '',
  user: '',
  pass: '',
  db: '',
};

if (fs.existsSync(path.resolve(__dirname, '..', 'config', 'db.json'))) {
  conf = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'config', 'db.json')).toString());
} else {
  log.error('[db.ts]> Couldn\'t locate `db.json` ... ');
}

/**
 * This MySQL-Connection-Pool provides access to the database. It uses the credentials from `src/config/db.json` to connect.
 */
const pool = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.pass,
  database: conf.db,
});

/**
 * Callback for the [[db.getConn|getConn]] function.
 */
type GetConnCallback =
/**
 * @param err In case an error occurs, it will be passed to the callback function here.
 * @param con This will contain the connection to the database, if the action was successful.
 */
(err: Error, con: mysql.PoolConnection) => void;


/**
 * Gets a connection to the MySQL database (selected from the [[db.pool|pool]])
 * @param cb The callback.
 */
export function getConn(cb: GetConnCallback) {
  pool.getConnection(cb);
}

/**
 * Callback for the [[db.exists|exists]] function.
 */
type ExistsCallback =
/**
 * @param err     In case an error occurs, it will be passed to the callback function here.
 * @param exists  Did the provided query yield a match?
 */
(err: Error, exists: boolean) => void;

/**
 * Checks if a given query yields any results.
 * @param query   The MySQL-Query to-be-tested.
 * @param params  Any parameters that should be passed to the query (escaped parameters: `?`)
 * @param cb      The callback.
 */
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