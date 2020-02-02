/**
 * @packageDocumentation
 * @module middleware/auth
 */

import express from 'express';
import error from '../lib/error';
import { KPSession, KPUser } from '../models';
import { NoSessionFoundError } from '../errors';

/**
 * Restricts access to _`logged-in`_ members only.
 * @param req The Express Request.
 * @param res The Express Reponse.
 * @param next The next function (the controller).
 */
function restrict(req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (!req.params.token) return error.errMsg(res, 403);
  KPSession.sessionExists(req.connection.remoteAddress, req.params.token, (errEx, exists) => {
    if (errEx) return error.e500(errEx, res);
    else if (!exists) return error.errMsg(res, 403);
    KPSession.useSession(req.connection.remoteAddress, req.params.token, errUse => {
      if (errUse) return error.e500(errUse, res);
      next();
    });
  });
};

/**
 * Restricts access to _`admin`_ members only.
 * @param req The Express Request.
 * @param res The Express Response.
 * @param next The next function (the controller).
 */
function restrictAdmin(req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (!req.params.token) return error.errMsg(res, 403);
  KPSession.getSession(req.connection.remoteAddress, req.params.token, (errGetSess, sess) => {
    if (errGetSess instanceof NoSessionFoundError) return error.errMsg(res, 403);
    else if (errGetSess) return error.e500(errGetSess, res);
    KPUser.getUser(sess.uname, (errGetUser, user) => {
      if (errGetUser) return error.e500(errGetUser, res);
      else if (!user.isAdmin) return error.errMsg(res, 403);
      KPSession.useSession(req.connection.remoteAddress, req.params.token, errUse => {
        if (errUse) return error.e500(errUse, res);
        next();
      });
    });
  });
}

export default { restrict, restrictAdmin };