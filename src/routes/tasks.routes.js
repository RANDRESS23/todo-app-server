import { Router } from 'express'
import { getTask } from '../controllers/tasks.controllers'

const router = Router()

router.get('/tasks', getTask)

export default router
