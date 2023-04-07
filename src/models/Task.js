import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
    trim: true
  },
  important: {
    type: Boolean,
    default: false
  },
  done: {
    type: Boolean,
    default: false
  },
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

const TaskModel = model('Task', taskSchema)

export default TaskModel
