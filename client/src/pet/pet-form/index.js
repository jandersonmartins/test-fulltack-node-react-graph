import React from 'react'
import PropTypes from 'prop-types'
import {
  Alert,
  Button,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const PetFormSchema = Yup.object().shape({
  name: Yup.string().required('informe o nome')
})

const PetForm = ({ pet, onSubmit, loading, error }) => (
  <Formik
    initialValues={pet}
    validationSchema={PetFormSchema}
    onSubmit={({ name }) => onSubmit({ name })}
  >
    {({ handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Field name="name">
          {({ field, meta }) => (
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                {...field}
                type="text"
                id="name"
                placeholder="nome do pet"
                autoComplete="name"
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

        <Button
          type="submit"
          disabled={loading}
          color="primary"
        >
          Cadastrar
        </Button>
      </Form>
    )}
  </Formik>
)

PetForm.defaultProps = {
  pet: {
    name: ''
  }
}

PetForm.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string
  }),
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string
}

export default PetForm
