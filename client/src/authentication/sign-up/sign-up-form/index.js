import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const SignUpForm = () => (
  <Form>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        autoComplete="email"
      />
    </FormGroup>

    <FormGroup>
      <Label for="password">Senha</Label>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        autoComplete="password"
      />
    </FormGroup>

    <FormGroup>
      <Label for="password-confirmation">Confirmar Senha</Label>
      <Input
        type="password"
        name="password-confirmation"
        id="password-confirmation"
        placeholder="Confirmar senha"
        autoComplete="password-confirmation"
      />
    </FormGroup>

    <Button color="primary">Submit</Button>
  </Form>
)

export default SignUpForm
