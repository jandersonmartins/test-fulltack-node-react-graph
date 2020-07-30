import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import PetsList from './pets-list'
import { LIST_PETS } from './query'
import { DELETE_PET } from './mutation'

const PetsListContainer = () => {
  const [showModal, setModal] = useState(false)

  const { data, loading, error, refetch } = useQuery(LIST_PETS, {
    onError: () => {}
  })

  const [deletePet] = useMutation(DELETE_PET, {
    onCompleted: () => refetch(),
    onError: () => toggle()
  })

  const toggle = () => setModal(!showModal)

  return (
    <>
      <PetsList
        data={data ? data.listPets : null}
        loading={loading}
        error={error}
        onDelete={id => deletePet({ variables: { id } })}
      />

      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Oops!</ModalHeader>
        <ModalBody>
          Não foi possível deletar o pet
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Ok</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default PetsListContainer
