import React, { Component } from "react";
import { Container, Row, Form, Button, Col, Card } from "react-bootstrap";
import "../styles/login.css";

export default class login extends Component {
  render() {
    return (
      <div id="container" class="col-12">
        <Card id="fondo" class="col-12">
        
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
                <Form.Label><i class="fas fa-sign-out-alt"></i></Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>

              <Button variant="primary"> 
                Ingresar
              </Button>
            </Form>
            </Col>
            </Row>
            </Col>
            </Row>
            
        </Container>
        </Card>
        
      </div>
    );
  }
}
