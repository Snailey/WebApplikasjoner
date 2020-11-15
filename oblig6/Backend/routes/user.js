import express from 'express';

import {userController} from '../controller/index.js'

const router = express.Router();

router.get('/:id', userController.get);

router.post('/create', userController.create);

router.put('/update/:id', userController.update);

router.post('/login', userController.login);

export default router;