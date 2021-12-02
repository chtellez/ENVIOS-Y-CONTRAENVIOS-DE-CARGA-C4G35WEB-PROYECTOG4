import { Button, Card } from "react-bootstrap";
import React, { useState } from 'react';
import "../styles/AgregarVehiculo.css";

class CardVehiculoDeUsuario extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <Card.Header ><strong>VEHÍCULO DE CARGA. </strong> </Card.Header>
        <Card.Body>
          {/* <Card.Title>Tipo: Camión 20 Toneladas</Card.Title> */}
          <Card.Text>
            Idóneo para transporte puerta a puerta.
          </Card.Text>
          <ul>
            <li><strong>Tipo Carga: </strong>{this.props.TipoCarga}</li>
            <li><strong>Placa: </strong>{this.props.Placa}</li>
            <li><strong>Capacidad: </strong>{this.props.Capacidad}</li>
          </ul>
          <Button variant="danger"
             onClick={this.props.AlClick}> Eliminar
             </Button>
          
        </Card.Body>

      </Card>
    );
  }
}
export default CardVehiculoDeUsuario;