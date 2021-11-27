import React from 'react'
import {  Col, Container, Form, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../styles/Footer.css";

const Footer = () => {
    return (
        <React.Fragment>
          <Container fluid className="p-0" id="hipervinculo">
            <Row className="py-2 bg-black text-light pt-4" style={{height:"150px"}}>
                <Col className="d-flex justify-content-center">
                  <p>
                      Colombia Bogotá (60 1) 343 00 <br />
                      Medellín (60 4) 510 90 <br />
                      Cali(60 2) 554 05 <br />
                      Desde el exterior +57 (60 1) 343 00 
                  </p>
                </Col>
              <Col style={{height:"100%"}} className="align-content-center">
              <Row >
                <Col className="col-12 d-flex justify-content-center">
                  <Form.Label className="align-text-bottom">Tu merjor opción en envios y contraenvios de carga a todo el país.</Form.Label>
                  </Col>
                  <Col className="d-flex justify-content-center  mt-3 pt-3" style={{width:"100%"}}>
                   <Nav.Link className="text-light" href="https://github.com/chtellez/ENVIOS-Y-CONTRAENVIOS-DE-CARGA-C4G35WEB-PROYECTOG4"><FontAwesomeIcon  icon={['fab', 'github']} className="mx-2" size="2x"/></Nav.Link>
                   <Nav.Link className="text-light" href="https://www.instagram.com/tucarga_01/"><FontAwesomeIcon icon={['fab', 'instagram']} className="mx-2" size="2x"/></Nav.Link>
                   <Nav.Link className="text-light" href="https://www.facebook.com/Envios-y-Contraenvios-de-Carga-102154708976747"><FontAwesomeIcon icon={['fab', 'facebook']} className="mx-2" size="2x"/></Nav.Link>
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


