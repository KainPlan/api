/**
 * @packageDocumentation
 * @module routes/users
 */

import express from 'express';
import { users } from '../controllers';
import { auth } from '../middleware';

/**
 * The Users-API-router.
 */
const router: express.Router = express.Router();

router.post('/login', users.login);
router.get('/profile/:token', auth.restrict, users.getProfile);

export default router;