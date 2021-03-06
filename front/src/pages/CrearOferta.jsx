import React, { useState } from "react";
import Axios from 'axios'
import { Button, Col, Card, Form, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/CrearOferta.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'

class CrearOferta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.manejadorChangeLargo();
    this.manejadorChangeAncho();
    this.manejadorChangeAlto();
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

    const fechaRecogida = this.state.date

    // console.log("Datos", origen, destino, largo, ancho, alto, peso, tipo, fechaRecogida);
    await Axios.post('api/solicitudes', {
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
        Swal.fire({
          icon:'success',
          title: 'oferta creada',
          showConfirmButton: false,
          timer: 1500
        })
        // console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
  }

  manejadorChangeLargo(){
    const lbl = document.getElementById("LblLargo");
    const range = document.getElementById("Largo");
    const valor = range.value;
    lbl.innerHTML = valor + " cm";
  }

  manejadorChangeAncho(){
    const lbl = document.getElementById("LblAncho");
    const range = document.getElementById("Ancho");
    const valor = range.value;
    lbl.innerHTML = valor + " cm";
  }

  manejadorChangeAlto(){
    const lbl = document.getElementById("LblAlto");
    const range = document.getElementById("Alto");
    const valor = range.value;
    lbl.innerHTML = valor + " cm";
  }

  manejadorChangePeso(){
    const lbl = document.getElementById("LblPeso");
    const range = document.getElementById("Peso");
    const valor = range.value;
    lbl.innerHTML = valor + " Kg";
  }


  render() {
    return (
      <>
        <Card className="mt-4">
          <Image
            src="https://placeimg.com/800/250/tech"
            className="mx-auto d-block mt-2"
          />
          <Form className="margen-form">
            <Row>
              <Col xs={0} lg={2}  >
              </Col>
              <Col xs={4} lg={3}>
                <Form.Group controlId="Origen">
                  <Form.Label>Ciudad Origen</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Medell??n</option>
                    <option value="2">Cali</option>
                    <option value="3">Palmira</option>
                    <option value="4">Bogot??</option>
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
                    <option value="1">Medell??n</option>
                    <option value="2">Cali</option>
                    <option value="3">Palmira</option>
                    <option value="4">Bogot??</option>
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
                  <Form.Label>Largo (cm)</Form.Label>
                  <Form.Range max="1000" step="10" onChange={() => this.manejadorChangeLargo()} >
                  </Form.Range >
                  <Form.Label id="LblLargo">0 cm</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Ancho">
                  <Form.Label>Ancho (cm)</Form.Label>
                  <Form.Range max="1000" step="10" onChange={() => this.manejadorChangeAncho()} >
                  </Form.Range >
                  <Form.Label id="LblAncho">0 cm</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Alto">
                  <Form.Label>Alto (cm)</Form.Label>
                  <Form.Range max="1000" step="10" onChange={() => this.manejadorChangeAlto()} >
                  </Form.Range >
                  <Form.Label id="LblAlto">0 cm</Form.Label>
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
                  <Form.Label>Peso aproximado (Kg)</Form.Label>
                  <Form.Range />
                  <Form.Label id="LblAlto">0 cm</Form.Label>
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
                    <option value="3">L??quidos</option>
                    <option value="4">Alimentos refrigerados</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="Tipo">
                  <Form.Label>Fecha de recogida</Form.Label>
                    <DatePicker className="form-control" selected={this.state.date} onChange={(date) => this.setState({date:date})} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formDatosEnvio">
                  <Form.Label>Los datos de su env??o</Form.Label>
                  <Form.Control type="text" placeholder="Normal text" />
                  <Form.Text className="text-muted">
                    Escriba aqu?? los datos de su env??o
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

        </Card>
      </>
    );
  }
}

export default CrearOferta;
