import { gql } from '@apollo/client'

const LIST_PETS = gql`
  {
    listPets {
      pets {
        id
        name
      }
    }
  }
`

export { LIST_PETS }
