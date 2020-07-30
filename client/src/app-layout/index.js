import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import Navbar from './navbar'
import { isLoggedInVar } from '../graphql/cache'
import './styles.css'

const AppLayout = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    isLoggedInVar(false)
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />

      <main className="app-layout__main">
        <Container fluid>
          {children}
        </Container>
      </main>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout
