import { gql } from 'apollo-server-express'

export default gql`
  type Pet {
    name: String!
    owner: User
  }

  type PetList {
    pets: [Pet]
  }

  extend type Mutation {
    createPet(name: String!): Pet
  }

  extend type Query {
    listPets: PetList
  }
`
