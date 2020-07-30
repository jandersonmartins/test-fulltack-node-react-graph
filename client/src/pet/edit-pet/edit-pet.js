import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import PetForm from '../pet-form'

const EditPet = ({ pet, ...props }) => (
  <Container>
    <Row>
      <Col>
        <h1>Editar - {pet.name}</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        <PetForm pet={pet} {...props} />
      </Col>
    </Row>
  </Container>
)

EditPet.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  onSubmit: PropTypes.func,
  error: PropTypes.any,
  loading: PropTypes.bool
}

export default EditPet
