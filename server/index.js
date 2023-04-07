const app = require('./app')
const mongoConnection = require('./mongoConnection')
const { PORT } = require('./config')

mongoConnection()
app.listen(PORT, () => console.log('Server is running'))
