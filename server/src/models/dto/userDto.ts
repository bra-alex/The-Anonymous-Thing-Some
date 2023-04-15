import mongoose from 'mongoose'

interface UserInput {
  name: string
  userId: string
  messages: Messages[]
}

export type Messages = {
  message: string
}

interface User extends UserInput, mongoose.Document {
  addMessage(message: string): User
}

export default User
