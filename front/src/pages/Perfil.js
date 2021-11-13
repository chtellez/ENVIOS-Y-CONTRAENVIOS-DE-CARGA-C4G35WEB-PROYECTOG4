import React, { Component } from "react";
import "../styles/Perfil.css";
import { Form, Container, Row, Col, Card, FloatingLabel, Button } from "react-bootstrap";

export default class Perfil extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "auto" }} className="principal">
                <Card.Header className="titulis">Tipo de usuario</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Button ClassName="editar" href="#">
                        Editar
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="nombre"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Apellido"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="apellido"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Cedula"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Cedula"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Telefono"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="telefono"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Correo"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="xxxx@xxxx.com"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre de Usuario"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Nombre de Usuario"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button ClassName="actualizarbtn" href="#">
                        Actualizar
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
