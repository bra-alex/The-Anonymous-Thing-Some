import User from '../models/dto/userDto'
import UserModel from '../models/user.mongo'

async function createUser(userDetails: User) {
  const user = await UserModel.create(userDetails)
  return user
}

async function addMessage({ userId, message }: { userId: string; message: string }) {
  const user = await UserModel.findOne({ userId })

  if (!user) throw new Error('User does not exist')

  user.addMessage(message)

  return await user.save()
}

async function fetchMessages(userId: string) {
  const user = await UserModel.findOne({ userId })

  if (!user) throw new Error('User does not exist')

  return user.messages
}

export { createUser, addMessage, fetchMessages }
