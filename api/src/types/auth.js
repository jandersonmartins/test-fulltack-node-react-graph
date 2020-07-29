import { gql } from 'apollo-server-express'

export default gql`
  input AuthInput {
    email: String!
    password: String!
  }

  type AuthData {
    token: String
  }

  extend type Mutation {
    signUp(input: AuthInput!): User
    signIn(input: AuthInput!): AuthData
  }
`
