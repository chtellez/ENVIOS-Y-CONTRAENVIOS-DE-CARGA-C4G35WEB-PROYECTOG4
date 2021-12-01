import React, { useState } from 'react';
import {Card, Accordion, Button, Col} from "react-bootstrap";
import "../styles/Aoferta.css";


class CardPropuestas extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
      return (
        
        <Card style={{ width: "auto" }}>
            <Card.Header>Propuesta 1</Card.Header>
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
                Fecha y Hora
            </Card.Subtitle>
            <Card.Text>Precio</Card.Text>
            <Button
                variant="warning"
                id="pagar"
                href="#"
                onClick={this.props.handleShow}
            >
                Pagar
            </Button>
            </Card.Body>
        </Card>
                            
      );
    }
  }
  export default CardPropuestas;