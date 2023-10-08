import express from 'express'

import {getAll, addOnce, getOnce, putAll, patchOnce,
deleteOnce, logIn} from '../controllers/user.js'

const router = express.Router()

router
.route('/user')
.get(getAll)
.post(addOnce)
.put(putAll)

router
.route('/user/:name')
.get(getOnce)
.patch(patchOnce)
.delete(deleteOnce)

router
.route('/login/:username/:password')
.get(logIn)

export default router