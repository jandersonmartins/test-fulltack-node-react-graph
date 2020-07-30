import { gql } from '@apollo/client'

const SIGN_IN = gql`
  mutation signIn($input: AuthInput!) {
    signIn(input: $input) {
      token
    }
  }
`

export { SIGN_IN }
