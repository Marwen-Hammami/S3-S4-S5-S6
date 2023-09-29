import express from 'express'

import {getAll, acheterJeu} from '../controllers/achat.js'

const router = express.Router()

router
.route('/achats')
.get(getAll)

router
.route('/achats/:game/:user')
.put(acheterJeu)

export default router