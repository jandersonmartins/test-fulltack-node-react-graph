import React, { lazy } from 'react'
import PropTypes from 'prop-types'

const AuthRoutes = lazy(() => import('./auth-routes'))
const AppRoutes = lazy(() => import('./app-routes'))

const Routes = ({ isLoggedIn }) =>
  isLoggedIn ? <AppRoutes /> : <AuthRoutes />

Routes.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Routes
