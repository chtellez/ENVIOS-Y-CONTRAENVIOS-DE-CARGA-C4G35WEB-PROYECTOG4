import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { APIHOST as host } from '../app.json';






// import Loading from '../Loading/Loading';
import loginImg from "../assets/login.svg";
import "../styles/login.scss";
import { Container, Form, Button } from "react-bootstrap";


export default function SignInSide() {

  const [correo,setCorreo]= useState('')
  const [contrasena,setContrasena]= useState('')
 
  const sesion=async(e)=>{
 
   e.preventDefault();
   const usuario={correo,contrasena}
   const respuesta = await Axios.post('api/usuario/login',usuario); //Acomodar ruta segun el back
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
 
     const token = respuesta.data.token
     const nombre = respuesta.data.nombre
     const transportista = respuesta.data.transportista
     const idUsuario= respuesta.data.id
 
     sessionStorage.setItem('token',token)
     sessionStorage.setItem('nombre',nombre)
     sessionStorage.setItem('transportista',transportista)
     sessionStorage.setItem('idUsuario',idUsuario)
 
     Swal.fire({
       icon:'success',
       title: mensaje,
       showConfirmButton: false,
       timer: 1500
     })
     if (respuesta.data.transportista == true){
       window.location.href='/home'
     }else{
       window.location.href='/'
     }
     
 
 
   }

 
  }
 
 
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  return (
    
    <Container className="base-container">

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
              onChange={(e)=>setCorreo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Constraseña</Form.Label>
            <Form.Control
              type="password"
              onChange={(e)=>setContrasena(e.target.value)}
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

