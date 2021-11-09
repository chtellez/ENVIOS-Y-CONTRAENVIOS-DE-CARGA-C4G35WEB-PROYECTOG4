import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

import "../styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <React.Fragment>
      <Navbar fixed="top" className="NavigationBar justify-content-end " collapseOnSelect >
        <Nav.Item>
          <Nav.Link href="/inicio" className="text-dark">
            Nosotros
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="text-dark">
            Servicios
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="text-dark">
            PQRS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-dark">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="text-dark">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/crear_oferta" className="text-dark">
            Crear Oferta
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/crear_solicitud_carga" className="text-dark">
            Solicitud de Carga
          </Nav.Link>
        </Nav.Item>
        
      </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar;
