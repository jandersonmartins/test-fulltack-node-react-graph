import { gql } from '@apollo/client'

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`

export { IS_LOGGED_IN }
