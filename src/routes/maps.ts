/**
 * @packageDocumentation
 * @module routes/maps
 */

import express from 'express';
import { maps } from '../controllers';
import { auth } from '../middleware';

/**
 * The Maps-API-router.
 */
const router: express.Router = express.Router();

router.get('/map', maps.getDefaultMap);
router.get('/map/:m_name/:token', auth.restrict,  maps.getMap);
router.put('/map/:m_name/:token', auth.restrictAdmin, maps.putMap);
router.get('/maps/:token', auth.restrict, maps.getMaps);
router.get('/version/:m_name/:token', auth.restrict, maps.getVersion);

export default router;