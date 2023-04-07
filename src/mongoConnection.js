import mongoose from 'mongoose'
import { MONGODB_URI } from './config'

const mongoConnection = async () => {
  try {
    mongoose.set('strictQuery', false)
    const mongoDB = await mongoose.connect(MONGODB_URI)

    console.log(`Connected to ${mongoDB.connection.name}`)
  } catch (error) {
    console.log(error)
  }
}

export default mongoConnection
