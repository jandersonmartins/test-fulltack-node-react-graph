import React, { lazy, Suspense } from 'react'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import client from './graphql/client'

const Bootstrap = lazy(() => import('./bootstrap'))

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Bootstrap />
      </BrowserRouter>
    </ApolloProvider>
  </Suspense>
)

export default App
