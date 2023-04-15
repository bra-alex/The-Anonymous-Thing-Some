import http from 'http'
import * as dotenv from 'dotenv'

import app from './app'

dotenv.config()

const PORT: number = +process.env.PORT!
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`)
})
