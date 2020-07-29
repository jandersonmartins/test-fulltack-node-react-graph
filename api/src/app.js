import { createServer } from 'http'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { SERVER_PORT } from './config/server'
import debugFn from './debug'
import typeDefs from './types'
import resolvers from './resolvers'
import serverContext from './server-context'

const debug = debugFn()

const expressApp = express()
const appServer = createServer(expressApp)

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: serverContext
})
apolloServer.applyMiddleware({ app: expressApp })

const app = {
  start: () => new Promise(resolve => {
    appServer.listen({ port: SERVER_PORT }, () => {
      debug(`Server ready at http://localhost:${SERVER_PORT}${apolloServer.graphqlPath}`)
      resolve()
    })
  }),

  stop: () => new Promise(resolve =>
    appServer.close(() => {
      debug('server stoped')
      resolve()
    })
  )
}

export { app }
