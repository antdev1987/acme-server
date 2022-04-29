import express from 'express'
const router = express.Router()

import {login} from '../controllers/userControllers.js'


router.post('/login', login)


export default router