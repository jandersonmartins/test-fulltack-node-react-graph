import React from 'react'
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

const SignUp = () => (
  <Container>
    <Row className="justify-content-center">
      <Col md="8">
        <CardGroup>
          <Card className="p-4">
            <CardTitle>
              <h1>Cadastre-se</h1>
            </CardTitle>

            <CardBody>
              <SignUpForm />
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
)

export default SignUp
