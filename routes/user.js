import express from 'express'

import {getAll, addOnce, getOnce, putOnce, patchOnce,
deleteOnce, logIn} from '../controllers/user.js'

const router = express.Router()

router
.route('/user')
.get(getAll)
.post(addOnce)

router
.route('/user/:name')
.get(getOnce)
.put(putOnce)
.patch(patchOnce)
.delete(deleteOnce)

router
.route('/login/:username/:password')
.get(logIn)

export default router