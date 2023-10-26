import express from 'express'
import { body } from "express-validator"

import {getAll, addOnce, getOnce, putAll, patchOnce,
deleteOnce} from '../controllers/game.js'
import { gameImageUpload } from "../middlewares/multer-config.js";

const router = express.Router()

router
.route('/')
.get(getAll)
.post(
    gameImageUpload, //Utiliser le middleWare multer pour les images
    body('title').isLength({ min: 5}),
    body('description').isLength({ min: 5}),
    body('price').isDecimal(),
    body('quantity').isNumeric(),
    addOnce)
.put(putAll)

router 
.route('/:title')
.get(getOnce)
.patch(patchOnce)
.delete(deleteOnce)

export default router