import { Router } from 'express';
import * as authController from '../controllers/authController.mjs';

const router = Router();

router.post('/signup', authController.createUser);
router.post('/login', authController.loginUser);

export default router;
