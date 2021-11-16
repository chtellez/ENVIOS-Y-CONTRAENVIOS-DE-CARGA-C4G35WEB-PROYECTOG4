import React from "react";
import "../styles/Perfil.css";
import {
  Row,
  Col,
  Container,
  Button,
  FloatingLabel,
  FormControl,
  Form,
} from "react-bootstrap";

import img from "../assets/img3.svg";
import user from "../assets/usuario.png";

export default function Perfil() {
  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <Row className="justify-content-center " style={{ marginTop: "22px" }}>
          <Col
            xs={6}
            sm={6}
            md={{ span: 5, offset: 1 }}
            lg={{ span: 5, offset: 1 }}
            className="align-self-start"
          >
            <div className="conten">
              <Row className="justify-content-center ">
                <Col md="auto">
                  <img src={user} className="user" />
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
                    <Form.Control type="email" placeholder="xxxx@xxxx.com" />
                  </FloatingLabel>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Nombre de Usuario"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Nombre de Usuario" />
                  </FloatingLabel>
                </Col>
                <Col
                  xs={6}
                  sm={6}
                  md={{ span: 4, offset: 8 }}
                  lg={{ span: 4, offset: 8 }}
                  className="align-self-end mt-3 "
                >
                  <Button variant="outline-warning" >Editar Informacion</Button>{" "}
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6}>
            {/* <img src={blob} className="blob" /> */}
            <p className="texto">TIPO DE USUARIO</p>
            <svg
              viewBox="0 0 160 180"
              xmlns="http://www.w3.org/2000/svg"
              className="blob"
            >
              <path
                className="bubli"
                fill="#43CBFF"
                d="M52.8,-56.8C64.1,-41.5,66,-20.8,67.2,1.2C68.5,23.3,69.1,46.5,57.8,61.2C46.5,75.8,23.3,81.9,3.4,78.5C-16.5,75.1,-33,62.3,-48.3,47.6C-63.6,33,-77.7,16.5,-77.9,-0.2C-78.1,-16.9,-64.4,-33.8,-49.1,-49.1C-33.8,-64.4,-16.9,-78.1,1.9,-80.1C20.8,-82,41.5,-72.2,52.8,-56.8Z"
                transform="translate(100 80)"
              />
            </svg>
            <img src={img} className="img1" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
