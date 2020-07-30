import { gql } from '@apollo/client'

const LIST_PETS = gql`
  {
    listPets {
      pets {
        name
      }
    }
  }
`

export { LIST_PETS }
