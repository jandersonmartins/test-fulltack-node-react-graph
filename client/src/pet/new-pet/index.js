import React from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import NewPet from './new-pet'
import { CREATE_PET } from './mutation'
import { LIST_PETS } from '../pets-list/query'

const NewPetContainer = ({ history }) => {
  const [create, { loading, error }] = useMutation(CREATE_PET, {
    refetchQueries: [{ query: LIST_PETS }],
    onCompleted: () => {
      history.push('/pets')
    },
    onError: () => {}
  })

  return (
    <NewPet
      onSubmit={data => create({ variables: data })}
      loading={loading}
      error={error && error.message}
    />
  )
}

NewPetContainer.propTypes = {
  history: PropTypes.object
}

export default NewPetContainer
