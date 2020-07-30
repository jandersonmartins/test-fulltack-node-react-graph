import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import SignUp from './sign-up'
import { SIGN_UP } from './mutation'

const SignUpContainer = () => {
  const [showModal, setModal] = useState(false)

  const [signUp, { loading, error }] = useMutation(SIGN_UP)

  const handleSubmit = async (data, actions) => {
    try {
      await signUp({ variables: { input: data } })
      actions.resetForm()
      toggle()
    } catch (e) {}
  }

  const toggle = () => setModal(!showModal)

  return (
    <>
      <SignUp
        onSubmit={handleSubmit}
        loading={loading}
        error={error && 'Ocorreu um erro no cadastro'}
      />

      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sucesso</ModalHeader>
        <ModalBody>
          Se cadastro foi efetuado com sucesso!
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Ok</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default SignUpContainer
