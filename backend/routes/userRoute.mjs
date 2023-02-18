import { Router } from 'express';
import * as authController from '../controllers/authController.mjs';

const router = Router();

router.route('/').post(authController.createUser);

export default router;
