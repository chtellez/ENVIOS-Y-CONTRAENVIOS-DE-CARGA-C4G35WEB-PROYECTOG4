import React, {useState, useContext} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../Img/logo.png";
import { Card, Col} from  "react-bootstrap"
import "../styles/NavigationBar.css";
import { AuthContext } from '../context/AuthContext';


const NavigationBar = () => {
  const {loggedIn, actualizarLogIn, esTransportista, actualizarEsTransportista, validarAuth} = useContext(AuthContext);

  return (
    <React.Fragment>
<<<<<<< HEAD
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
=======
          <Navbar fixed="top" className="NavigationBar justify-content-end " collapseOnSelect >

          <Col className="d-flex" style={{width:"30px", height:"30px"}} id="logo">
            <div  className="col-12 col-sm-5 col-md-4 col-lg-2"><Card.Img src={logo} id="pocion" style={{width:"30px", height:"30px"}} ></Card.Img></div>
          </Col>
          <Nav.Item>
          <Nav.Link href="/" onClick={validarAuth} className="text-dark"><FontAwesomeIcon icon={'home'} size="sm"/> Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/aceptar_oferta" onClick={validarAuth}  className={'text-dark ' + (loggedIn?(esTransportista?'d-none':''): 'd-none')}><FontAwesomeIcon icon={'vote-yea'} size="sm"/> Aceptar Oferta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/crear_oferta" onClick={validarAuth} className={'text-dark ' + (loggedIn?(esTransportista?'':'d-none'): 'd-none')}><FontAwesomeIcon icon={'shipping-fast'} size="sm"/> Crear Oferta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/solicitudes" onClick={validarAuth}  className={'text-dark ' + (loggedIn?(esTransportista?'':'d-none'): 'd-none')}><FontAwesomeIcon icon={'people-carry'} size="sm"/> Demanda</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/PagAgregarVehiculo" onClick={validarAuth} className={'text-dark ' + (loggedIn?'': 'd-none')}><FontAwesomeIcon icon={'user'} size="sm"/>
              Agregar Vehículo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/perfil"  className={'text-dark ' + (loggedIn?'': 'd-none')}><FontAwesomeIcon icon={'user'} size="sm"/> Perfil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link  className="text-dark" onClick={actualizarLogIn}><FontAwesomeIcon icon={'sign-in-alt'} size="lg"/> {loggedIn?'Cerrar sesion':'Iniciar sesion'}</Nav.Link>
          </Nav.Item>

          <Nav.Item>
          <Nav.Link href="#hipervinculo" onClick={validarAuth} className="text-dark"><FontAwesomeIcon icon={'address-card'} size="sm"/> Contacto</Nav.Link>
          </Nav.Item>

          <Nav.Item>
          <Nav.Link  className={'text-dark ' + (loggedIn?'': 'd-none')} onClick={actualizarEsTransportista}>{esTransportista?'Transportista':'Cliente'}</Nav.Link>
          </Nav.Item>

        </Navbar>
>>>>>>> 92dd9025ccf11582032e1062a8363ab2c76fdd48
    </React.Fragment>
  )
}

export default NavigationBar;
