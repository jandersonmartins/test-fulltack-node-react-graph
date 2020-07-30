import React from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQuery } from '@apollo/client'
import EditPet from './edit-pet'
import { UPDATE_PET } from './mutation'
import { FIND_BY_ID } from './query'
import { LIST_PETS } from '../pets-list/query'
import LoadError from './load-error'

const EditPetContainer = ({ history, match }) => {
  const { data, loading, error } = useQuery(FIND_BY_ID, {
    variables: {
      id: match.params.id
    },
    onError: () => {}
  })

  const [update, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_PET, {
    refetchQueries: [{ query: LIST_PETS }],
    onCompleted: () => {
      history.push('/pets')
    },
    onError: () => {}
  })

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <LoadError error={error.message} />
  }

  return (
    <EditPet
      onSubmit={data =>
        update({ variables: { name: data.name, id: match.params.id } })
      }
      pet={data.findPetById}
      loading={mutationLoading}
      error={mutationError && mutationError.message}
    />
  )
}

EditPetContainer.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default EditPetContainer
