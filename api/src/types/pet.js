import { gql } from 'apollo-server-express'

export default gql`
  type Pet {
    id: ID!
    name: String!
    owner: User
  }

  type PetList {
    pets: [Pet]
  }

  extend type Mutation {
    createPet(name: String!): Pet
    updatePet(id: ID!, name: String!): Pet
    deletePet(id: ID): Boolean
  }

  extend type Query {
    listPets: PetList
  }

  extend type Query {
    findPetById(id: ID!): Pet
  }
`
