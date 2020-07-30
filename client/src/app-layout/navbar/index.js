import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar as BNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap'
import PropTypes from 'prop-types'

const Navbar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <BNavbar color="light" light expand="md">
      <NavbarBrand href="/">Meus Pets</NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/pets">Todos</NavLink>
          </NavItem>
        </Nav>

        <NavbarText>
          <a href="!#" onClick={() => onLogout()} role="button">Sair</a>
        </NavbarText>
      </Collapse>
    </BNavbar>
  )
}

Navbar.propTypes = {
  onLogout: PropTypes.func
}

export default Navbar
