/**
 * @packageDocumentation
 * @module lib
 */

import log from './log';
import express from 'express';

function errMsg(res: express.Response, code: number, opts: { err?: Error, msg?: string } = { err: undefined, msg: undefined, }): void {
  const codeDict : {
    [id: number]: string;
  } = {
    400: 'Bad request!',
    401: 'Unauthorized access!',
    402: 'Payment required!',
    403: 'Forbidden!',
    404: 'Resource not found!',
    405: 'Method not allowed!',
    406: 'Not acceptable!',
    407: 'Proxy Authentication Required!',
    408: 'Request Timeout!',
    409: 'Conflict!',
    410: 'Gone!',
    418: 'I\'m a teapot!',
    500: 'Internal server error!',
  };

  if (code === 500 && opts.err) {
    log.error({
      message: opts.err,
      code: 500,
    });
  }

  res.status(code)
     .send(`{"msg": "${opts.msg ? opts.msg : codeDict[code]}"}`);
}

function e500(err: Error, res: express.Response) {
  errMsg(res, 500, { err, });
}

export default { errMsg, e500, };