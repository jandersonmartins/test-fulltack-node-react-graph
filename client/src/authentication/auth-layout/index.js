import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const AuthLayout = ({ children }) => (
  <div className="auth-layout">
    {children}
  </div>
)

AuthLayout.propTypes = {
  children: PropTypes.node
}

export default AuthLayout
