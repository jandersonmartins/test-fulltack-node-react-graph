import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppLayout from '../../app-layout'

const PetsListContainer = lazy(() => import('../../pet/pets-list'))

const AppRoutes = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/pets" component={PetsListContainer} />
      <Redirect to="/pets" />
    </Switch>
  </AppLayout>
)

export default AppRoutes
