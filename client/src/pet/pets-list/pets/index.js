import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

const Pets = ({ pets }) => {
  if (!pets.length) {
    return <Alert color="warning">Nenhum pet cadastrado</Alert>
  }

  // TODO
  return null
}

Pets.propTypes = {
  pets: PropTypes.array
}

export default Pets
