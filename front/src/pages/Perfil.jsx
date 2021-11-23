import React from "react";
import "../styles/Perfil.css";
import {
  Row,
  Col,
  Container,
  Button,
  FloatingLabel,
  Form,
  Card,
} from "react-bootstrap";

import img from "../assets/buble.png";
import user from "../assets/usuario.png";

export default function Perfil() {
  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <Row className="justify-content-center mt-2 mb-2">
          <Col md={10}>
            <Card border="primary" style={{ overflow: "hidden" }}>
              <Card.Body style={{ paddingTop: "0px", paddingBottom: "0px"}}>
                <Row
                  className="justify-content-center "
                  
                >
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    // md={{ span: 5, offset: 1 }}
                    // lg={{ span: 5, offset: 1 }}
                    className="align-self-start"
                  >
                    <div className="conten">
                      <Row className="justify-content-center ">
                        <Col md="auto">
                          <img
                            src={user}
                            className="user"
                            alt="icono de usuario"
                          />
                        </Col>
                      </Row>
                      <br></br>

                      <Row>
                        <Col xs={6} sm={6} md={6} lg={6}>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="nombre" />
                          </FloatingLabel>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Apellido"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="apellido" />
                          </FloatingLabel>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Cedula"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="Cedula" />
                          </FloatingLabel>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Telefono"
                            className="mb-3"
                          >
                            <Form.Control type="text" placeholder="telefono" />
                          </FloatingLabel>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
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
                        <Col xs={6} sm={6} md={6} lg={6}>
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
                        <Col
                          xs={6}
                          sm={6}
                          md={{ span: 4, offset: 8 }}
                          lg={{ span: 4, offset: 8 }}
                          className="align-self-end mt-3 "
                        >
                          <Button variant="warning">
                            Editar Informacion
                          </Button>{" "}
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    
                  >
                    {/* <img src={blob} className="blob" /> */}
                   
                      <p className="texto">TIPO DE USUARIO</p>
                      <img
                        src={img}
                        className="img1"
                        alt="imagen de un señor con cajas"
                      />
                    
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
