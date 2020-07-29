import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthLayout from '../../authentication/auth-layout'

const SignUpContainer = lazy(() => import('../../authentication/sign-up'))

const AuthRoutes = () => (
  <AuthLayout>
    <Switch>
      <Route exat path="/sign-in" component={() => <h1>sign-in</h1>} />
      <Route exat path="/sign-up" component={SignUpContainer} />

      <Redirect to="/sign-in" />
    </Switch>
  </AuthLayout>
)

export default AuthRoutes
