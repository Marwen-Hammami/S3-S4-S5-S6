import express from 'express'

import {getAll, addOnce, getOnce, putOnce, patchOnce,
deleteOnce} from '../controllers/game.js'

const router = express.Router()

router
.route('/game')
.get(getAll)
.post(addOnce)

router
.route('/game/:title')
.get(getOnce)
.put(putOnce)
.patch(patchOnce)
.delete(deleteOnce)

export default router