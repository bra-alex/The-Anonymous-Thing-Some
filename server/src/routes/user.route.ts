import express from 'express'

import {
  addMessageHandler,
  createAccountHandler,
  fetchMessagesHandler,
} from '../controllers/user.controller'

const userRoute = express.Router()

userRoute.post('/create-account', createAccountHandler)
userRoute.get('/:userId/messages', fetchMessagesHandler)
userRoute.post('/:userId/add-message', addMessageHandler)

export default userRoute
