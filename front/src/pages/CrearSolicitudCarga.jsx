import React from "react";
import { Button, Col, Container, Form, Row, Nav, Image } from "react-bootstrap";
import imgSolicitudCarga from "../Img/a-enviosurgentes1-1024x597.jpg";

const CrearSolicitudCarga = () => {
  return (
      <React.Fragment>
        <Row>
            <Col xs={6} md={4}>
                <Image src={imgSolicitudCarga} rounded />
            </Col>
            <Col xs={6} md={4}>
               
            </Col>
            <Col xs={6} md={4}>
            </Col>
        </Row>
        <Form className="mt-5">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Email
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
            Password
            </Form.Label>
            <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>
        </Form>

      </React.Fragment>
  );
};

export default CrearSolicitudCarga;
