import React, { useState, } from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2'
// import { APIHOST as host } from '../app.json';


import Loading from '../Loading/Loading';

import registerImg from "../assets/register_img.svg";
import "../styles/register.scss";
import { FloatingLabel, Form, Button, Row, Col } from "react-bootstrap";


export default function RegistrarUsuario() {

  const [nombre,setNombre]=useState('')
  const [apellido,setApellido]=useState('')
  const [cedula,setCedula]=useState('')
  const [telefono,setTelefono]=useState('')
  const [correo,setCorreo]=useState('')
  const [username,setUsername]=useState('')
  const [contrasena,setContrasena]=useState('')
  const [transportista,setTransportista]=useState('')

  const registro= async(e)=>{
    e.preventDefault();
    const usuario={nombre,apellido,cedula,telefono,correo,username,contrasena,transportista}
    const respuesta = await Axios.post('api/usuario/crear',usuario) //Cambiar ruta de acuerdo al back
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    if(mensaje!=='Bienvenido')
    {

      Swal.fire({
        icon:'error',
        title:mensaje,
        showConfirmButton:false,
        timer:1500
      })

    }

    else{

      Swal.fire({
        icon:'success',
        title:"Usuario creado correctamente",
        showConfirmButton:false,
        timer:1500
      })


      setTimeout(()=>{
        window.location.href='/login'
      },1600)


    }

  }



  return (

    <div className="base-container">
      <br />
      <div className="header">Registrarse</div>
      <div className="contents">
        <div className="image">
          <img src={registerImg} alt="fondo_register" />
        </div>
        <form className="form" onSubmit={registro}>
          <Row>
            <Col>
              <Form.Group className="form-group">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nombre:"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nombre:"
                    required
                    onChange={(e)=>setNombre(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-group">
              <FloatingLabel
                  controlId="floatingInput"
                  label="Apellido:"
                >
                  <Form.Control
                    type="text"
                    placeholder="Apellido:"
                    required
                    onChange={(e)=>setApellido(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="form-group">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Cedula:"
                >
                  <Form.Control
                    type="number"
                    placeholder="Cedula:"
                    required
                    onChange={(e)=>setCedula(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-group">
              <FloatingLabel
                  controlId="floatingInput"
                  label="Telefono:"
                >
                  <Form.Control
                    type="tel"
                    placeholder="Telefono:"
                    required
                    onChange={(e)=>setTelefono(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="form-group">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Correo:"
                >
                  <Form.Control
                    type="email"
                    placeholder="Correo:"
                    required
                    onChange={(e)=>setCorreo(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-group">
              <FloatingLabel
                  controlId="floatingInput"
                  label="Nombre de usuario:"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nombre de usuario:"
                    required
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col style={{marginRight: "80px"}}>
              <Form.Group className="form-group">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Contraseña:"
                >
                  <Form.Control
                    type="password"
                    placeholder="Contraseña:"
                    pattern=".{8,}"
                    title="la contraseña debe tener un minimo de 8 caracteres"
                    required
                    onChange={(e)=>setContrasena(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
                <p as="legend" column sm={2}>
                  ¿Eres transportista?
                </p>
            </Col>
            <Col>
              <Form.Group>
                <Form.Check
                  type="radio"
                  label="Si"
                  value= "true"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={(e)=>setTransportista(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  Value="false"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  onChange={(e)=>setTransportista(e.target.value)}
                />

              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="btn"> Guardar</Button>

          {/* <Button
            variant="primary"
            type="submit"
            className="btn"

          >
            Registrarce
          </Button> */}

        </form>
      </div>
      <div className="footer">

        <br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}
