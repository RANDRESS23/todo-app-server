import jwt from 'jsonwebtoken'
import UserModel from '../models/User'
import RoleModel from '../models/Role'
import { JWT_SECRET } from '../config'

export const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return res.status(403).json({ message: 'No token provided!' })
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET)
    const user = await UserModel.findById(id, { password: 0 })

    if (!user) {
      return res.status(404).json({ message: 'No user found!' })
    }

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized!' })
  }
}

export const isModerator = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userId)
    const roles = await RoleModel.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'moderator') {
        next()
        return
      }
    }

    return res.status(403).json({ message: 'Require Moderator Role!' })
  } catch (error) {
    return res.status(500).send({ message: error })
  }
}

export const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userId)
    const roles = await RoleModel.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next()
        return
      }
    }

    return res.status(403).json({ message: 'Require Admin Role!' })
  } catch (error) {
    return res.status(500).send({ message: error })
  }
}
