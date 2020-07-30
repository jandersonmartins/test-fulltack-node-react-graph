import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Row,
  CardTitle
} from 'reactstrap'
import SignInForm from './sign-in-form'

const SignIn = ({ onSubmit, loading, error }) => (
  <Container>
    <Row className="justify-content-center">
      <Col md="8">
        <CardGroup>
          <Card className="p-4">
            <CardTitle>
              <h1>Entrar</h1>
            </CardTitle>

            <CardBody>
              <SignInForm
                onSubmit={onSubmit}
                loading={loading}
                error={error}
              />
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
)

SignIn.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string
}

export default SignIn
