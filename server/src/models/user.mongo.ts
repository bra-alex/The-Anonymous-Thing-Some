import mongoose from 'mongoose'

import User from './dto/userDto'

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  messages: [
    {
      message: String,
    },
  ],
})

userSchema.methods.addMessage = function (message: string): User {
  const user = this as User
  user.messages.push({ message })
  return user
}

const UserModel = mongoose.model<User>('User', userSchema)

export default UserModel
