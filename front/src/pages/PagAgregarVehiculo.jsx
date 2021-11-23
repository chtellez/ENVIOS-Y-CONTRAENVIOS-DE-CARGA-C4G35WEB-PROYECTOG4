import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "../styles/Perfil.css";
import "../styles/AgregarVehiculo.css";
import CardVehiculoDeUsuario from "../components/CardVehiculoDeUsuario";
import FormNuevoVehiculo from "../components/FormNuevoVehiculo";

class PagAgregarVehiculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StsVehiculos: [
        {
          TipoCarga: "Leche",
          Placa: "EPQ-694",
          Capacidad: "1 tonelada"
        }, {
          TipoCarga: "Ferroníquel",
          Placa: "LPR-733",
          Capacidad: "8 toneladas"
        }
      ]
    }
  }

  ManejadorEliminar(id) {
    console.log("Botón eliminar id:" + id);
  }

  CardConColumna(i) {
    return (
      <Col xs={12} sm={12} lg={12} className="mb-3 my-3">
        <CardVehiculoDeUsuario
          TipoCarga={this.state.StsVehiculos[i].TipoCarga}
          Placa={this.state.StsVehiculos[i].Placa}
          Capacidad={this.state.StsVehiculos[i].Capacidad}
          AlClick={() => this.ManejadorEliminar(i)} />
      </Col>
    )
  }

  render() {
    return (
      <>
        <Container fluid >
          <Row className="margen-relleno">
            <Col xs={0} sm={0} lg={1} >
            </Col>
            <Col xs={12} sm={4} lg={4} >
              <div className="icono">
                <FontAwesomeIcon icon={'user'} size="4x" className="margen-icono" />
                <p>Nombre Conductor</p>
              </div>
              <hr />
              <FormNuevoVehiculo />
            </Col>
            <Col xs={12} sm={8} lg={6}>
              <Row>
                {this.CardConColumna(0)}
                {this.CardConColumna(1)}
              </Row>
            </Col>
            <Col xs={0} sm={0} lg={1} >
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// class Holder extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       // const car = {type:"Fiat", model:"500", color:"white"};
//       stsVehiculos: Array[0],
//     }
//   }
// }

export default PagAgregarVehiculo;
