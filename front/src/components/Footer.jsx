import React from 'react'
import { Button, Col, Container, Form, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <React.Fragment>
          <Container fluid className="p-0" >
            <Row>
              <Col>
                <Nav variant="pills" className="justify-content-center py-2 bg-black" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/"  className="text-info"><FontAwesomeIcon icon={'home'} size="lg"/> Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/"  className="text-light"><FontAwesomeIcon icon={'truck-loading'} size="lg"/> Servicios</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/"  className="text-light"><FontAwesomeIcon icon={'list-alt'} size="lg"/> Contacto</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/"  className="text-light"><FontAwesomeIcon icon={'building'} size="lg"/> Nosotros</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/"  className="text-light"><FontAwesomeIcon icon={'sign-in-alt'} size="lg"/> Iniciar Serión</Nav.Link>
                  </Nav.Item>

                </Nav>
              </Col>
            </Row>

            <Form className="p-2 bg-dark" >
              <Form.Group as={Row} className="m-3 justify-content-md-center">
                  <Form.Label column md={{span:'auto'}} className="text-light" >Suscribete a nuestro Newsletter</Form.Label>
                  <Col md={{span:4}}>
                    <Form.Control type="email" placeholder="Correo electrónico" />
                  </Col>
                  <Col md={{span:'auto'}} className="mt-2 mt-md-0">
                    <Button variant="primary" type="submit">
                      Suscribir
                    </Button>
                  </Col>
              </Form.Group>
            </Form>

            <Row className="py-2 bg-black text-light" style={{height:"150px"}}>
              <Col className="d-flex justify-content-center" style={{width:"100%", height:"100%"}}>
                <FontAwesomeIcon icon={'truck-moving'} className="mx-2 mt-5" size="3x"/>
                <h2 className="mt-5" >TuCarga</h2>
                <FontAwesomeIcon icon={'registered'} className="mx-2 mt-5" size="sm"/>
              </Col>
              <Col style={{height:"100%"}} className="align-content-center">
              <Row >
                <Col className="col-12 d-flex justify-content-center mt-4 pt-3">
                  <Form.Label className="align-text-bottom">Tu merjor opción en envios y contraenvios de carga a todo el país.</Form.Label>
                  </Col>
                  <Col className="d-flex justify-content-center" style={{width:"100%"}}>
                    <FontAwesomeIcon icon={['fab', 'github']} className="mx-2" size="2x"/>
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="mx-2" size="2x"/>
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2" size="2x"/>
                </Col>
              </Row>
                
              </Col>
            </Row>
          
          </Container>
 
  {/* <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> */}

        </React.Fragment>

        
    )
}

export default Footer


