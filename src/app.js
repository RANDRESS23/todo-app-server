import express from 'express'
import cors from 'cors'
import { createRoles } from './libs/initialSetup'

// Routes
import usersRouter from './routes/users.routes'
import tasksRouter from './routes/tasks.routes'
import authRouter from './routes/auth.routes'

const app = express()
createRoles()

// MiddleWares
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/user', usersRouter)
app.use('/api/task', tasksRouter)

export default app
