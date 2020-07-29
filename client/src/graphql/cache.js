import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: () => isLoggedInVar()
      }
    }
  }
})

const isLoggedInVar = cache.makeVar(!!localStorage.getItem('token'))

export { cache, isLoggedInVar }
