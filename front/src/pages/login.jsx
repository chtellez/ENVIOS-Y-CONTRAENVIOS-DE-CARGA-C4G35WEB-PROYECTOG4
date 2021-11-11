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
              <h1>Iniciar Sesión</h1>
            </Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
