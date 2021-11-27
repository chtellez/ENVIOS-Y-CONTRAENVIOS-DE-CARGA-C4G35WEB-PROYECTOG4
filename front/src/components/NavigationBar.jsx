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
          <Nav.Link href="/aceptar_Oferta" className="text-dark">
            Aceptar Oferta
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
          <Nav.Link href="/solicitudes" className="text-dark">
            Demanda
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/perfil" className="text-dark">
            Perfil
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/PagAgregarVehiculo" className="text-dark">
            Agregar Vehículo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login" className="text-dark">
            Iniciar Sesion
          </Nav.Link>
        </Nav.Item>

      </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar;
