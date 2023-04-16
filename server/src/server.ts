import http from 'http'
import * as dotenv from 'dotenv'

import app from './app'
import { mongoConnect } from './util/mongo'

dotenv.config()

const PORT: number = +process.env.PORT!
const MONGO_URL = process.env.MONGO_URL!

const server = http.createServer(app)

server.listen(PORT, async () => {
  console.log(`Connected on port ${PORT}`)
  await mongoConnect(MONGO_URL)
})
