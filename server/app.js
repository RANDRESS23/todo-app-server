const express = require('express')
const usersRouter = require('./routes/users.routes')

const app = express()

// app.use(express.json())

// Routes
app.use(usersRouter)

module.exports = app
