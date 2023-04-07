const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users.routes')
const app = express()

// MiddleWares
app.use(express.json())
app.use(cors())

// Routes
app.use(usersRouter)

module.exports = app
