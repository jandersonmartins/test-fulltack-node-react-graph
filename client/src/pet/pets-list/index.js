import React from 'react'
import { useQuery } from '@apollo/client'
import { LIST_PETS } from './query'
import PetsList from './pets-list'

const PetsListContainer = () => {
  const { data, loading, error } = useQuery(LIST_PETS, {
    onError: () => {}
  })

  return (
    <PetsList
      data={data ? data.listPets : null}
      loading={loading}
      error={error}
    />
  )
}

export default PetsListContainer
