import express from 'express';
import error from './error';
import { KPSession, KPUser } from '../models';
import { NoSessionFoundError } from '../errors';

function restrict(req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (!req.query.token) return error.err_msg(res, 403);
  KPSession.sessionExists(req.connection.remoteAddress, req.query.token, (errEx, exists) => {
    if (errEx) return error.e500(errEx, res);
    else if (!exists) return error.err_msg(res, 403);
    KPSession.useSession(req.connection.remoteAddress, req.query.token, errUse => {
      if (errUse) return error.e500(errUse, res);
      next();
    });
  });
};

function restrictAdmin(req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (!req.query.token) return error.err_msg(res, 403);
  KPSession.getSession(req.connection.remoteAddress, req.query.token, (errGetSess, sess) => {
    if (errGetSess instanceof NoSessionFoundError) return error.err_msg(res, 403);
    else if (errGetSess) return error.e500(errGetSess, res);
    KPUser.getUser(sess.uname, (errGetUser, user) => {
      if (errGetUser) return error.e500(errGetUser, res);
      else if (!user.isAdmin) return error.err_msg(res, 403);
      KPSession.useSession(req.connection.remoteAddress, req.query.token, errUse => {
        if (errUse) return error.e500(errUse, res);
        next();
      });
    });
  });
}

export default { restrict, restrictAdmin };