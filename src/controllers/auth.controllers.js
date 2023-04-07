import UserModel from '../models/User'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config'

const signUpHandler = async (req, res) => {
  const { name, lastName, username, email, password, role } = req.body

  const newUser = new UserModel({
    name,
    lastName,
    username,
    email,
    password: await UserModel.encryptPassword(password),
    role
  })

  const savedUser = await newUser.save()

  const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
    expiresIn: 86400 // 24 hours
  })

  res.status(200).json({ token })
}

const signInHandler = async (req, res) => {

}

export {
  signUpHandler,
  signInHandler
}
