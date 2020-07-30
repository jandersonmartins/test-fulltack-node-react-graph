import { gql } from '@apollo/client'

const DELETE_PET = gql`
  mutation deletePet($id: ID!) {
    deletePet(id: $id)
  }
`

export { DELETE_PET }
