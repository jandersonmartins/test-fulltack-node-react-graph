import React, { lazy } from 'react'
import PropTypes from 'prop-types'

const AuthRoutes = lazy(() => import('./auth-routes'))

const Routes = ({ isLoggedIn }) => <AuthRoutes />

Routes.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Routes
