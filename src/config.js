import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todo_app'
const PORT = process.env.PORT || '4000'
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export {
  MONGODB_URI,
  PORT,
  JWT_SECRET
}
