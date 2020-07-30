import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Alert,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row
} from 'reactstrap'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('email inválido')
    .required('preencha o e-mail'),

  password: Yup.string()
    .required('preencha a senha')
})

const SignUpForm = ({ onSubmit, loading, error }) => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={SignInSchema}
    onSubmit={({ email, password }) => onSubmit({ email, password })}
  >
    {({ handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Field name="email">
          {({ field, meta }) => (
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                {...field}
                type="email"
                id="email"
                placeholder="E-mail"
                autoComplete="email"
              />
              {meta.touched && meta.error && (
                <FormText className="help-block">{meta.error}</FormText>
              )}
            </FormGroup>
          )}
        </Field>

        <Field name="password">
          {({ field, meta }) => (
            <FormGroup>
              <Label for="password">Senha</Label>
              <Input
                {...field}
                type="password"
                id="password"
                placeholder="Senha"
                autoComplete="password"
              />

              {meta.touched && meta.error && (
                <FormText className="help-block">{meta.error}</FormText>
              )}
            </FormGroup>
          )}
        </Field>

        {error && (
          <FormGroup>
            <Alert color="danger">{error}</Alert>
          </FormGroup>
        )}

        <Row>
          <Col xs="6">
            <Button
              type="submit"
              disabled={loading}
              color="primary"
            >
              Entrar
            </Button>
          </Col>

          <Col xs="6" className="text-right">
            <Link to="/sign-up">Cadastre-se</Link>
          </Col>
        </Row>
      </Form>
    )}
  </Formik>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string
}

export default SignUpForm