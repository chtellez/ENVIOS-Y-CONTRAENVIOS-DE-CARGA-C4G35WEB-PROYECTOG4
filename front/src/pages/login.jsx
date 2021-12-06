import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
// import { APIHOST as host } from '../app.json';

// import Loading from '../Loading/Loading';
import loginImg from "../assets/login.svg";
import "../styles/login.scss";
import {  Form, Button, Container } from "react-bootstrap";

export default function SignInSide() {
  //aca se establece los datos que se tomaran del formulario
  const [correo,setCorreo]= useState('')
  const [contrasena,setContrasena]= useState('')

  const sesion=async(e)=>{

   e.preventDefault();
   const usuario={correo,contrasena}
   const respuesta = await Axios.post('api/usuario/login',usuario); //acá se envian a peticion
   console.log(respuesta)
   const mensaje= respuesta.data.mensaje

   if(mensaje!=='Bienvenido') {

     Swal.fire({
       icon:'error',
       title: mensaje,
       showConfirmButton: false,
       timer: 1500
     })

   }

   else {

    //aca se establece lo que se almacenara en el sesionstorage
     const token = respuesta.data.token
     const nombre = respuesta.data.nombre
     //de aqui
     const apellido = respuesta.data.apellido
     const cedula = respuesta.data.cedula
     const telefono = respuesta.data.telefono
     const correo = respuesta.data.correo
     const usuario = respuesta.data.username
     //hasta aqui no se deberia mostrar en el sesionStorage, cambiar en un futuro.
     const transportista = respuesta.data.transportista
     const idUsuario= respuesta.data.id

     sessionStorage.setItem('token',token)
     sessionStorage.setItem('nombre',nombre)

     sessionStorage.setItem('apellido',apellido)
     sessionStorage.setItem('cedula',cedula)
     sessionStorage.setItem('telefono',telefono)
     sessionStorage.setItem('correo',correo)
     sessionStorage.setItem('usuario',usuario)

     sessionStorage.setItem('transportista',transportista)
     sessionStorage.setItem('idUsuario',idUsuario)

     Swal.fire({
       icon:'success',
       title: mensaje,
       showConfirmButton: false,
       timer: 1500
     })
     if (respuesta.data.transportista == true){//acomodar aqui las rutas pa donde sera redirigido despues del login
       window.location.href='/'
     }else{
       window.location.href='/'
     }


   }

  }

  return (
    <Container className="base-container my-5">
      {/* <Loading show={this.state.loading} /> */}
      <div className="header">Inicio Sesión</div>

      <div className="content">
        <div className="image">
          <img src={loginImg} alt="fondo_login" />
        </div>
        <form className="form" onSubmit={sesion}>
          <Form.Group className="form-group">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              onChange={(e) => setCorreo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Constraseña</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setContrasena(e.target.value)}
            />
          </Form.Group>
          <p>¿No tienes cuenta? <a href="/register">Registrate!</a></p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

