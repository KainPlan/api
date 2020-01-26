import error from './error';
import express from 'express';

export default function restrict(req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (req.body.token) {
    next();
  } else {
    error.err_msg(res, 403);
  }
};