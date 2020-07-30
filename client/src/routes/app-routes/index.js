import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppLayout from '../../app-layout'

const PetsListContainer = lazy(() => import('../../pet/pets-list'))
const NewPetContainer = lazy(() => import('../../pet/new-pet'))
const EditPetContainer = lazy(() => import('../../pet/edit-pet'))

const AppRoutes = () => (
  <AppLayout>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/pets" component={PetsListContainer} />
        <Route exact path="/pets/new" component={NewPetContainer} />
        <Route exact path="/pets/:id/edit" component={EditPetContainer} />

        <Redirect to="/pets" />
      </Switch>
    </Suspense>
  </AppLayout>
)

export default AppRoutes
