import express from 'express';
import { api } from '../controllers';
import { auth } from '../lib';

const router: express.Router = express.Router();

router.get('/map', api.getDefaultMap);
router.get('/map/:m_name/:token', auth.restrict,  api.getMap);
router.put('/map/:m_name/:token', auth.restrictAdmin, api.putMap);
router.get('/maps/:token', auth.restrict, api.getMaps);
router.get('/version/:m_name/:token', auth.restrict, api.getVersion);
router.post('/login', api.login);

export default router;