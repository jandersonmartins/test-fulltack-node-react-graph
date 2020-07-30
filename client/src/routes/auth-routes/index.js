import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthLayout from '../../authentication/auth-layout'

const SignUpContainer = lazy(() => import('../../authentication/sign-up'))
const SignInContainer = lazy(() => import('../../authentication/sign-in'))

const AuthRoutes = () => (
  <AuthLayout>
    <Switch>
      <Route exact path="/sign-in" component={SignInContainer} />
      <Route exact path="/sign-up" component={SignUpContainer} />
      <Redirect to="/sign-in" />
    </Switch>
  </AuthLayout>
)

export default AuthRoutes
