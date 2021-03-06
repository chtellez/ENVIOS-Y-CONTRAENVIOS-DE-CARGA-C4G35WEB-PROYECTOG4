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
    await Axios.get('api/vehiculo/')
      .then(response => {
        this.setState(
          {
            StsVehiculos: response.data["body"],
          })
      })
      .catch(e => {
        console.log(e);
      })
  }

  async ManejadorEliminar(idVehiculo) {
    const aux = idVehiculo;
    await Axios.delete('api/vehiculo/',{ data: { "_id": aux } })
      .then(response => {
        console.log(response);
        this.CargaVehiculosBD()
      })
      .catch(e => {
        console.log(e);
      })
  }

  RenderizarVehiculos() {
    return (
      this.state.StsVehiculos.map((vehiculo) => {
        return (
          <Col xs={12} sm={12} lg={12} className="mb-3 my-3">
            <CardVehiculoDeUsuario
              key={vehiculo.id}
              TipoCarga={vehiculo.tipoCarga}
              Placa={vehiculo.placa}
              Capacidad={vehiculo.capacidad}
              AlClick={() => this.ManejadorEliminar(vehiculo._id)} />
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

              <FormNuevoVehiculo
                actualizarCards={() => { this.CargaVehiculosBD() }}
              />

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
