import { Router } from 'express'
import { getUser, createNewUser, updateUser } from '../controllers/users.controllers'

const router = Router()

router.get('/user/:email/:password', getUser)

router.post('/user/:email/:password', createNewUser)

router.put('/user/:email/:password', updateUser)

export default router
