import { Express } from 'express'

import userRoute from './routes/user.route'

export default function routes(app: Express) {
  app.use('/users', userRoute)
}
