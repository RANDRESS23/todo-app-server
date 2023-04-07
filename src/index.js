import app from './app'
import mongoConnection from './mongoConnection'
import { PORT } from './config'

mongoConnection()

app.listen(PORT, () => console.log('Server is running'))
