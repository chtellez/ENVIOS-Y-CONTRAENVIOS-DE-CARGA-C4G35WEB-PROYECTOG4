import React from "react";
import Axios from 'axios'
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "../styles/Perfil.css";
import "../styles/AgregarVehiculo.css";
import CardVehiculoDeUsuario from "../components/CardVehiculoDeUsuario";
import FormNuevoVehiculo from "../components/FormNuevoVehiculo";

class PagAgregarVehiculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StsVehiculos: []
    }
    this.CargaVehiculosBD()
  }

  async CargaVehiculosBD() {
    await Axios.get('api/vehiculo/todos')
      .then(response => {
        console.log(response.data["body"]);
        this.setState(
          {
            StsVehiculos: response.data["body"],
          })
      })
      .catch(e => {
        console.log(e);
      })
  }

  ManejadorAgregar(){

  }

  ManejadorEliminar(id) {
    console.log("Botón eliminar id:" + id);
  }

  RenderizarVehiculos() {
    return (
      this.state.StsVehiculos.map((vehiculo) => {
        return (
          <Col xs={12} sm={12} lg={12} className="mb-3 my-3">
            <CardVehiculoDeUsuario
              TipoCarga={vehiculo.tipoCarga}
              Placa={vehiculo.placa}
              Capacidad={vehiculo.capacidad}
              AlClick={() => this.ManejadorEliminar()} />
          </Col>
        );
      })
    );
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

              <FormNuevoVehiculo/>

            </Col>
            <Col xs={12} sm={8} lg={6}>
              <Row>
                {this.RenderizarVehiculos()}
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

export default PagAgregarVehiculo;
