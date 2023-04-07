const mongoose = require('mongoose')
const { MONGODB_URI } = require('./config')

const mongoConnection = async () => {
  try {
    mongoose.set('strictQuery', false)
    const mongoDB = await mongoose.connect(MONGODB_URI)

    console.log(`Connected to ${mongoDB.connection.name}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = mongoConnection
