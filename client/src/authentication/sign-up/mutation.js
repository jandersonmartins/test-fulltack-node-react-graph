import { gql } from '@apollo/client'

const SIGN_UP = gql`
  mutation signUp($input: AuthInput!) {
    signUp(input: $input) {
      email
    }
  }
`

export { SIGN_UP }
