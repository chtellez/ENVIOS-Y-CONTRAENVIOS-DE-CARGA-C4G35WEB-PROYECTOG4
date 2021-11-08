import React, { Component } from "react";
import "../Styles/Aoferta.css";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";

export default class AceptarOferta extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <section>
              <div className="content">
                <h2>Ofertas </h2>
                <p>
                  Aqui un titulo con imagen alusiva a la aceptacion de ofertas
                </p>
              </div>
              <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#ffffff"
                  fill-opacity="1"
                  d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </section>
          </Col>
        </Row>
        <br></br>
        <Row className="justify-content-center">
          <Col sm="6" lg="3" md="3" className="mb-5">
            <Card style={{ width: "auto" }}>
              <Card.Header>Oferta 1</Card.Header>
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
                              Contraoferta de transportista
                            </Card.Subtitle>
                            <Card.Text>uwu</Card.Text>
                            <Button ClassName="justify-content-end" href="#">
                              Pagar
                            </Button>
                          </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{ width: "auto" }}>
                          <Card.Header>Propuesta 1</Card.Header>
                          <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">
                              Contraoferta de transportista
                            </Card.Subtitle>
                            <Card.Text>uwu</Card.Text>
                            <Button ClassName="justify-content-end" href="#">
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
          <Col sm="6" lg="3" md="3">
            <Card style={{ width: "auto" }}>
              <Card.Header>Oferta 2</Card.Header>
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
                              Contraoferta de transportista
                            </Card.Subtitle>
                            <Card.Text>uwu</Card.Text>
                            <Button ClassName="justify-content-end" href="#">
                              Pagar
                            </Button>
                          </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{ width: "auto" }}>
                          <Card.Header>Propuesta 1</Card.Header>
                          <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">
                              Contraoferta de transportista
                            </Card.Subtitle>
                            <Card.Text>uwu</Card.Text>
                            <Button ClassName="justify-content-end" href="#">
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
          <Col sm="6" lg="3" md="3">
            <Card style={{ width: "auto" }}>
              <Card.Header>Oferta 2</Card.Header>
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
                              Contraoferta de transportista
                            </Card.Subtitle>
                            <Card.Text>uwu</Card.Text>
                            <Button ClassName="justify-content-end" href="#">
                              Pagar
                            </Button>
                          </Card.Body>
                        </Card>
                        <br></br>
                        <Card style={{ width: "auto" }}>
                          <Card.Header>Propuesta 1</Card.Header>
                          <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">
                              Contraoferta de transportista
                            </Card.Subtitle>
                            <Card.Text>uwu</Card.Text>
                            <Button ClassName="justify-content-end" href="#">
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
      </div>
    );
  }
}
