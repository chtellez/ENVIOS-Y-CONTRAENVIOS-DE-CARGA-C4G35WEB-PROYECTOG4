import React, { Component } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import "../styles/login.css";

export default class login extends Component {
  render() {
    return (
      <div>
        <Container id="login">
          <Row>
            <Col>
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Col
              sm= "12"
              xs= "12"
              md={{span:4,offset:4}}
              lg={{ span:4, offset:4}}
              xl= {{span:4, offset:4}}
              >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> </Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>

              <Button variant="primary" >
                Entrar
              </Button>
            </Form>
            </Col>
            </Row>
            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}
