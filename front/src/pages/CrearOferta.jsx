import React from "react";
import Axios from 'axios'
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/CrearOferta.css";

class CrearOferta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  async ManejadorBtnAgregar() {

    const e = document.getElementById("Origen");
    const origen = e.options[e.selectedIndex].text;

    const f = document.getElementById("Destino");
    const destino = f.options[e.selectedIndex].text;

    const g = document.getElementById("Largo")
    const largo = g.value;

    const h = document.getElementById("Ancho")
    const ancho = h.value;

    const i = document.getElementById("Alto")
    const alto = i.value;

    const j = document.getElementById("Peso")
    const peso = j.value;

    const k = document.getElementById("Tipo");
    const tipo = k.options[e.selectedIndex].text;

    const fechaRecogida = "2021-12-05T00:00:00.000+00:00";

    // console.log("Datos", origen, destino, largo, ancho, alto, peso, tipo, fechaRecogida);
    await Axios.post('api/demanda/', {
      origen: origen,
      destino: destino,
      largo: largo,
      ancho: ancho,
      alto: alto,
      volumen: 123,
      peso: peso,
      tipo: tipo,
      fechaRecogida: fechaRecogida,
    })
      .then(response => {
        // console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    return (
      <>
        <Container>
          <Image
            src="https://placeimg.com/800/250/tech"
            className="mx-auto d-block"
          />
          <Form className="margen-form">
            <Row>
              <Col xs={0} lg={2}  >
              </Col>
              <Col xs={4} lg={3}>
                <Form.Group controlId="Origen">
                  <Form.Label>Ciudad Origen</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Medellín</option>
                    <option value="2">Cali</option>
                    <option value="3">Palmira</option>
                    <option value="4">Bogotá</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={4} lg={2} className="icono">
                <FontAwesomeIcon icon={'arrow-right'} size="3x" />
              </Col>
              <Col xs={4} lg={3}>
                <Form.Group className="mb-3" controlId="Destino">
                  <Form.Label>Ciudad Destino</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Medellín</option>
                    <option value="2">Cali</option>
                    <option value="3">Palmira</option>
                    <option value="4">Bogotá</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={0} lg={2}  >
              </Col>
            </Row>
            <Row>
              <Col xs={0} lg={2}  >
              </Col>
              <Col >
                <Form.Group controlId="Largo">
                  <Form.Label>Largo</Form.Label>
                  <Form.Range />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Ancho">
                  <Form.Label>Ancho</Form.Label>
                  <Form.Range />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Alto">
                  <Form.Label>Alto</Form.Label>
                  <Form.Range />

                </Form.Group>
              </Col>
              <Col xs={0} lg={2}  >
              </Col>
            </Row>
            <Row>
              <Col xs={0} lg={2}  >
              </Col>
              <Col>
                <Form.Group controlId="Peso">
                  <Form.Label>Peso aproximado</Form.Label>
                  <Form.Range />
                </Form.Group>
              </Col>
              <Col xs={6}  >
              </Col>
            </Row>
            <Row>
              <Col xs={0} lg={2}  >
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Tipo">
                  <Form.Label>Tipo de carga</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Acarreo</option>
                    <option value="2">Carga viva</option>
                    <option value="3">Líquidos</option>
                    <option value="4">Alimentos refrigerados</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formDatosEnvio">
                  <Form.Label>Los datos de su envío</Form.Label>
                  <Form.Control type="text" placeholder="Normal text" />
                  <Form.Text className="text-muted">
                    Escriba aquí los datos de su envío
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={0} lg={2}  >
              </Col>
            </Row>
            <Row>
              <Col xs={0} lg={2}  >
              </Col>
              <Col>
                <Button variant="secondary" //type="submit"
                  onClick={() => this.ManejadorBtnAgregar()}>
                  Publicar solicitud
                </Button>
              </Col>
              <Col xs={0} lg={2}  >
              </Col>
            </Row>
          </Form>

        </Container>
      </>
    );
  }
}

export default CrearOferta;
