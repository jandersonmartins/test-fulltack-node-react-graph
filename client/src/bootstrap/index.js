import React, { lazy } from 'react'
import { useQuery } from '@apollo/client'
import { IS_LOGGED_IN } from './query'

const Routes = lazy(() => import('../routes'))

const Bootstrap = () => {
  const { data } = useQuery(IS_LOGGED_IN)

  return <Routes isLoggedIn={data.isLoggedIn} />
}

export default Bootstrap
