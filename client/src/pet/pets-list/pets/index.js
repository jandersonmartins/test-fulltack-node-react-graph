import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Alert, ListGroup, ListGroupItem } from 'reactstrap'
import ListIcons from './list-icons'
import './styles.css'

const Pets = ({ pets, onDelete }) => {
  if (!pets.length) {
    return (
      <Alert color="warning">
        Nenhum pet cadastrado. <Link to="/pets/new">Cadastre seu pet aqui</Link>
      </Alert>
    )
  }

  return (
    <ListGroup>
      {pets.map(({ id, name }) => (
        <ListGroupItem key={id} className="pets-list-group">
          {name}
          <ListIcons id={id} onDelete={onDelete} />
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

Pets.propTypes = {
  pets: PropTypes.array,
  onDelete: PropTypes.func.isRequired
}

export default Pets
