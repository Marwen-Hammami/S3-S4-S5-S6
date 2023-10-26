import express from 'express'

import {getAll, addOnce, acheterJeu} from '../controllers/achat.js'

const router = express.Router()

router
.route('/')
.get(getAll)
.post(addOnce)

router
.route('/:game/:user')
.put(acheterJeu)

export default router