import { ROLES } from '../models/Role'
import UserModel from '../models/User'

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const userFound = await UserModel.findOne({ username: req.body.username })

    if (userFound) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const email = await UserModel.findOne({ email: req.body.email })

    if (email) {
      return res.status(400).json({ message: 'Email already exists' })
    }

    next()
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export const checkExistRoles = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`
        })
      }
    }
  }

  next()
}
