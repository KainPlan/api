/**
 * @packageDocumentation
 * @module lib/error
 */

import log from './log';
import express from 'express';

/**
 * Will send an error message using the given response, in the proper JSON format.
 * @param res The Express Response.
 * @param code The Error Code.
 * @param opts Extra options: Can contain an error object for logging and/or a specific error message.
 */
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

/**
 * Should be used for all internal server errors:
 * Wrapper for [[lib.errMsg|`errors.errMsg`]] - if provided with an error and an express response,
 * it will take care of responding to the client.
 * @param err The error object.
 * @param res The Express response.
 */
function e500(err: Error, res: express.Response) {
  errMsg(res, 500, { err, });
}

export default { errMsg, e500, };