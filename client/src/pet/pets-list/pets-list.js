import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Alert } from 'reactstrap'
import Pets from './pets'

const PetsList = ({ data, loading, error, onDelete }) => (
  <Container>
    <Row>
      <Col>
        <h1>Pets</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        {error && <Alert color="danger">{error.message}</Alert>}
        {loading ? <p>Carregando...</p> : (
          <Pets
            pets={(data && data.pets) || []}
            onDelete={onDelete}
          />
        )}
      </Col>
    </Row>
  </Container>
)

PetsList.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string,
    pets: PropTypes.array
  }),
  onDelete: PropTypes.func.isRequired
}

export default PetsList
