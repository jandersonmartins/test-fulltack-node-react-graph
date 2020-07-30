import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Alert } from 'reactstrap'

const LoadError = ({ error }) => (
  <Container>
    <Row>
      <Col>
        <Alert color="danger">{error}</Alert>
      </Col>
    </Row>
  </Container>
)

LoadError.propTypes = {
  error: PropTypes.string
}

export default LoadError
