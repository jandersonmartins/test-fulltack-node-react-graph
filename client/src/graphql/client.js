import { ApolloClient } from '@apollo/client'
import typeDefs from './types'
import { cache } from './cache'

const client = new ApolloClient({
  cache,
  typeDefs,
  uri: 'http://localhost:4000/graphql'
})

export default client
