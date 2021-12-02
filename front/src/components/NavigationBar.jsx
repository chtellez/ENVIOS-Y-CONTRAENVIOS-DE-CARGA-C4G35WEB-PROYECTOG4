import React, {useContext, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../Img/logo.png";
import { Card, Col} from  "react-bootstrap"
import "../styles/NavigationBar.css";
import { AuthContext } from '../context/AuthContext';



const NavigationBar = () => {
  const {loggedIn, actualizarLogIn, esTransportista, actualizarEsTransportista, cerrarSesion} = useContext(AuthContext);
  useEffect(()=>{
    actualizarLogIn()
  },[])

  return (
    <React.Fragment>
          <Navbar fixed="top" className="NavigationBar justify-content-end " collapseOnSelect >

          <Col className="d-flex" style={{width:"50px", height:"50px"}} id="logo">
            <div  className="col-12 col-sm-5 col-md-4 col-lg-2"><Card.Img src={logo} id="pocion" style={{width:"70px", height:"auto"}} ></Card.Img></div>
          </Col>
          <Nav.Item>
          <Nav.Link href="/" onClick={actualizarLogIn} className="text-dark"><FontAwesomeIcon icon={'home'} size="sm"/> Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/aceptar_oferta" onClick={actualizarLogIn}  className={'text-dark ' + (loggedIn?(esTransportista?'d-none':''): 'd-none')}><FontAwesomeIcon icon={'vote-yea'} size="sm"/> Aceptar Oferta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/crear_oferta" onClick={actualizarLogIn} className={'text-dark ' + (loggedIn?(esTransportista?'':'d-none'): 'd-none')}><FontAwesomeIcon icon={'shipping-fast'} size="sm"/> Crear Oferta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/solicitudes" onClick={actualizarLogIn}  className={'text-dark ' + (loggedIn?(esTransportista?'':'d-none'): 'd-none')}><FontAwesomeIcon icon={'people-carry'} size="sm"/> Demanda</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/PagAgregarVehiculo" onClick={actualizarLogIn} className={'text-dark ' + (loggedIn?(esTransportista?'':'d-none'): 'd-none')}><FontAwesomeIcon icon={'user'} size="sm"/>
              Agregar Vehículo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/perfil"  className={'text-dark ' + (loggedIn?'': 'd-none')}><FontAwesomeIcon icon={'user'} size="sm"/> Perfil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href={loggedIn?'/':'/login'} className="text-dark" onClick={loggedIn ? cerrarSesion : actualizarLogIn}><FontAwesomeIcon icon={'sign-in-alt'} size="lg"/> {loggedIn?'Cerrar sesion':'Iniciar sesion'}</Nav.Link>
          </Nav.Item>

          <Nav.Item>
          <Nav.Link href="#hipervinculo" onClick={actualizarLogIn} className="text-dark"><FontAwesomeIcon icon={'address-card'} size="sm"/> Contacto</Nav.Link>
          </Nav.Item>

        </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar;
