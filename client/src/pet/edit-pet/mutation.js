import { gql } from '@apollo/client'

const UPDATE_PET = gql`
  mutation updatePet($id: ID!, $name: String!) {
    updatePet(id: $id, name: $name) {
      name
    }
  }
`

export { UPDATE_PET }
