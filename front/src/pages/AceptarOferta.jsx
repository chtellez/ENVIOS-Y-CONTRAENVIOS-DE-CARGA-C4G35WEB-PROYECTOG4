import React, { useState } from 'react';
import "../styles/Aoferta.css";
import { Row, Col, Card, Accordion, Button, Modal,} from "react-bootstrap";
import img from "../assets/Hand-Truck.svg";

function AceptarOferta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <React.Fragment>
      <div className="contenedor">
        <section className="section">
          <Row>
            <Col
              xs={6}
              sm={6}
              md={{ span: 4, offset: 1 }}
              lg={{ span: 4, offset: 1 }}
            >
              <span className="content">
                <h2>MIS OFERTAS </h2>
                <p>
                  Visualiza las ofertas que has publicado y las respuestas
                  de transportistas.
                </p>
              </span>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={{ span: 4, offset: 2 }}
              lg={{ span: 4, offset: 2 }}
              className="align-self-end"
            >
              <img
                src={img}
                className="img"
                alt="Una carretilla para llevar paquetes"
              />
            </Col>
            <Col>
              <svg
                className="wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  // fill-opacity="1"
                  d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </Col>
          </Row>
        </section>
        <br></br>
        <Row
          className="ml-5 justify-content-center"
          style={{ marginLeft: "22px" }}
        >
          <Col xs={6} sm={6} md={3} lg={3} className="mb-5">
            <Card
              style={{ width: "auto", borderRadius: "20px", elevation: 3 }}
              className="Cardsita"
            >
              <Card.Header
                style={{
                  backgroundColor: "#53b7f1",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              >
                Oferta 1
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Descripcion breve de la oferta
                </Card.Subtitle>
                <Card.Text>
                  <Accordion defaultActiveKey="1" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Ver propuestas</Accordion.Header>
                      <Accordion.Body>
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
                              onClick={handleShow}
                            >
                              Pagar
                            </Button>
                          </Card.Body>
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Informacion Del Conductor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Nombre, Apellido, vehiculo placa.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </React.Fragment>
  );
}


export default AceptarOferta;
