import { Schema, model } from 'mongoose'

const roleSchema = new Schema({
  name: String
}, {
  versionKey: false
})

const RoleModel = model('Role', roleSchema)

export default RoleModel
