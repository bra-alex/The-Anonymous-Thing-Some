import { Request, Response } from 'express'

import { addMessage, createUser, fetchMessages } from '../services/user.service'
import User, { Messages } from '../models/dto/userDto'

async function createAccountHandler(req: Request, res: Response) {
  try {
    const userDetails = req.body as User
    userDetails.messages = []

    const user = await createUser(userDetails)

    return res.status(201).json(user)
  } catch (e: any) {
    return res.status(400).json(e.message)
  }
}

async function addMessageHandler(req: Request, res: Response) {
    try {
        const { message } = req.body as Messages
        const userId = req.params.userId

        const messages = await addMessage({ userId, message })

        return res.status(201).json(messages)
    } catch (e: any) {
        return res.status(404).json(e.message)
    }
}

async function fetchMessagesHandler(req: Request, res: Response) {
    try {
        const userId = req.params.userId
        const messages = await fetchMessages(userId)

        return res.status(200).json(messages)
    } catch (e:any) {
        return res.status(404).json(e.message)
    }
}

export { createAccountHandler, addMessageHandler, fetchMessagesHandler }
