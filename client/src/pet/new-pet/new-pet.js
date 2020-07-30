import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import PetForm from '../pet-form'

const NewPet = props => (
  <Container>
    <Row>
      <Col>
        <h1>Cadatrar Pet</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        <PetForm {...props} />
      </Col>
    </Row>
  </Container>
)

NewPet.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.any,
  loading: PropTypes.bool
}

export default NewPet
