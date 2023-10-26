import express from 'express'
import { body } from "express-validator"

import {getAll, addOnce, getOnce, putAll, patchOnce,
deleteOnce, logIn} from '../controllers/user.js'
import { userAvatarUpload } from "../middlewares/multer-config.js";

const router = express.Router()

router
.route('/')
.get(getAll)
.post(
    userAvatarUpload, //Utiliser le middleWare multer pour les images
    body('username').isLength({ min: 5}),
    body('password').isLength({ min: 8}),
    body('wallet').isDecimal(),
    addOnce)
.put(putAll)

router
.route('/:name')
.get(getOnce)
.patch(patchOnce)
.delete(deleteOnce)

router
.route('/login/:username/:password')
.get(logIn)

export default router