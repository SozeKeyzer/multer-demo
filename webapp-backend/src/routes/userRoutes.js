import express from 'express';
import * as userController from '../controller/userController.js';
import { auth } from '../middleware/auth.js';
import { multerFunc } from '../config/multer.js';
const upload = multerFunc();
const router = express.Router();

router.post('/signup',userController.signup);
router.post('/login',userController.login);
router.post('/upload',upload.single('image'),auth,userController.upload);

export default router;