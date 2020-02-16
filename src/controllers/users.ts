/**
 * @packageDocumentation
 * @module controllers/users
 */

import bcrypt from 'bcrypt';
import express from 'express';
import { error } from '../lib';
import { KPUser, KPSession } from '../models';
import { NoUserFoundError, NoSessionFoundError } from '../errors';

/**
 * **`<ANYONE>`**
 *
 * Controller for `POST::/login` --> checks the sent credentials and responds with either the appropriate session-token or with an error message.
 * @param req The Express Request
 * @param res The Express Response
 */
function login(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  if (!req.body.uname || !req.body.pwd
    || req.body.uname.length === 0 || req.body.pwd.length === 0) return error.errMsg(res, 400, { msg: 'No username / password!' });
  KPUser.getUser(req.body.uname, (errGet, user) => {
    if (errGet instanceof NoUserFoundError) return error.errMsg(res, 400, { msg: 'Invalid username!' });
    else if (errGet) return error.e500(errGet, res);
    bcrypt.compare(req.body.pwd, user.password, (errComp, same) => {
      if (errComp) return error.e500(errComp, res);
      if (!same) return error.errMsg(res, 400, { msg: 'Wrong password!' });
      KPSession.generateSession(req.connection.remoteAddress, req.body.uname, (errGen, sess) => {
        if (errGen) return error.e500(errGen, res);
        res.status(200).send(JSON.stringify({
          success: true,
          token: sess.token,
        }));
      });
    });
  });
}

/**
 * **`<LOGGED-IN>`**
 *
 * Controller for `GET::/profile/:token` --> will respond with basic information about the current user.
 *
 * @param req The Express Request
 * @param res The Express Response
 */
function getProfile(req: express.Request, res: express.Response): void {
  res.setHeader('Content-Type', 'application/json');
  KPSession.getSession(req.connection.remoteAddress, req.params.token, (errSess, sess) => {
    if (errSess instanceof NoSessionFoundError) return error.errMsg(res, 400, { msg: 'Invalid credentials!' });
    else if (errSess) return error.e500(errSess, res);
    KPUser.getUser(sess.uname, (errUser, user) => {
      if (errUser instanceof NoUserFoundError) return error.errMsg(res, 400, { msg: 'Invalid session!' });
      else if (errUser) return error.e500(errUser, res);
      res.status(200).send(JSON.stringify({
        success: true,
        user: {
          username: user.username,
          isAdmin: user.isAdmin,
        },
      }));
    });
  });
}

export default {
  login,
  getProfile,
};