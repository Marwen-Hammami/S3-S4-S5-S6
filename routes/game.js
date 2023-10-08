import express from 'express'

import {getAll, addOnce, getOnce, putAll, patchOnce,
deleteOnce} from '../controllers/game.js'

const router = express.Router()

router
.route('/game')
.get(getAll)
.post(addOnce)
.put(putAll)

router
.route('/game/:title')
.get(getOnce)
.patch(patchOnce)
.delete(deleteOnce)

export default router