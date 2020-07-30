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
import SignUpForm from './sign-up-form'

const SignUp = ({ onSubmit, loading, error }) => (
  <Container>
    <Row className="justify-content-center">
      <Col md="8">
        <CardGroup>
          <Card className="p-4">
            <CardTitle>
              <h1>Cadastre-se</h1>
            </CardTitle>

            <CardBody>
              <SignUpForm
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

SignUp.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string
}

export default SignUp
