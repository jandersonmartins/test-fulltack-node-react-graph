import mongoose from 'mongoose'
import { MONGO_URL } from './config/mongodb'
import debugFn from './debug'

const debug = debugFn()

const database = {
  start: () => new Promise((resolve, reject) => {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    mongoose.connection.on('error', err => reject(err))

    mongoose.connection.once('open', () => {
      debug('mongodb connected')
      resolve()
    })
  }),

  stop: () => new Promise(resolve =>
    mongoose.connection.close(() => {
      debug('mongo db connection closed')
      resolve()
    })
  )
}

export { database }
