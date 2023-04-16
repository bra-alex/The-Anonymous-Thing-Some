import mongoose from 'mongoose'

mongoose.connection.on('open', () => console.log('Connected to mongo'))
mongoose.connection.on('error', (e: any) => console.log(e))

async function mongoConnect(uri: string) {
  return await mongoose.connect(uri)
}

export { mongoConnect }
