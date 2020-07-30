import { gql } from '@apollo/client'

const FIND_BY_ID = gql`
  query findPetById($id: ID!) {
    findPetById(id: $id) {
      id
      name
    }
  }
`

export { FIND_BY_ID }
