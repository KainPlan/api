import express from 'express';
import { api } from '../controllers';
import { auth } from '../lib';

const router: express.Router = express.Router();

router.get('/map', api.get_default_map);
router.get('/map/:m_name', auth, api.get_map);
router.get('/version/:m_name', auth, api.get_version);

export default router;