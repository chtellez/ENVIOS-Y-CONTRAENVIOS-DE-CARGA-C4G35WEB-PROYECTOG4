import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Perfil.css";
import "../styles/AgregarVehiculo.css";
import {CardVehiculoDeUsuario} from "../components/CardVehiculoDeUsuario";

class AgregarVehiculo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={12} sm={6} md={4} className="titulis">
              <div>
                <FontAwesomeIcon icon={'user'} size="4x" />
                <p>Nombre Conductor</p>
              </div>
              <hr/>
              <Form>
                <Form.Group className="mb-3" controlId="TipoCarga">
                  <Form.Label>Tipo de carga</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Acarreo</option>
                    <option value="2">Carga viva</option>
                    <option value="3">Líquidos</option>
                    <option value="4">Alimentos refrigerados</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Placa">
                  <Form.Label>Placa</Form.Label>
                  <Form.Control type="text" placeholder="Entre Placa" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Capacidad">
                  <Form.Label>Capacidad</Form.Label>
                  <Form.Control type="text" placeholder="Entre Capacidad Carga" />
                </Form.Group>
              </Form>
              <Button variant="secondary" type="submit">
                  Agregar Vehículo
                </Button>
            </Col>

            <Col xs={12} sm={6} md={8} className="titulis">
              <CardVehiculoDeUsuario>

              </CardVehiculoDeUsuario>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AgregarVehiculo;
