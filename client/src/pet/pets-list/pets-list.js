import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Alert } from 'reactstrap'
import Pets from './pets'

const PetsList = ({ data, loading, error }) => (
  <div>
    <Row>
      <Col>
        <h1>Pets</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        {error && <Alert color="danger">{error.message}</Alert>}
        {loading ? <p>Carregando...</p> : <Pets pets={(data && data.pets) || []} />}
      </Col>
    </Row>
  </div>
)

PetsList.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.bool,
  data: PropTypes.shape({
    pets: PropTypes.array
  })
}

export default PetsList
