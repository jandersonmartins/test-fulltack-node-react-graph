import { gql } from '@apollo/client'

const CREATE_PET = gql`
  mutation createPet($name: String!) {
    createPet(name: $name) {
      name
    }
  }
`

export { CREATE_PET }
