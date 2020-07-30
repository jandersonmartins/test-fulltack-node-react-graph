import { ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import typeDefs from './types'
import { cache } from './cache'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  const authHeader = token ? ({ Authentication: `jwt ${token}` }) : {}

  return {
    headers: {
      ...headers,
      ...authHeader
    }
  }
})

const client = new ApolloClient({
  cache,
  typeDefs,
  link: authLink.concat(httpLink)
})

export default client
