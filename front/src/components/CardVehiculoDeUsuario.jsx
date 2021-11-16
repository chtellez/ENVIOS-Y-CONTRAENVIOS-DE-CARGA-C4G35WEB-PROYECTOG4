import { Button, Card } from "react-bootstrap";
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types'

class CardVehiculoDeUsuario extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardVehiculoDeUsuario


