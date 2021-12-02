import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'
import "../styles/Perfil.css";

import {
  Row,
  Col,
  Container,
  Image,
  Button,
  FloatingLabel,
  Form,
  Card,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import img from "../assets/buble.png";
// import user from "../assets/usuario.png";
import waw from "../assets/wave1.png";
import bg from "../assets/bg2.svg";

function Perfil() {
  
  const [usuarios,setUsuarios]=useState([])
  const [idUsuario,setIdUsuario]=useState('')
  const [nombre,setNombre]=useState('')
  const [apellido,setApellido]=useState('')
  const [cedula,setCedula]=useState('')
  const [telefono,setTelefono]=useState('')
  const [correo,setCorreo]=useState('')
  const [username,setUsername]=useState('')
  const [contrasena,setContrasena]=useState('')
  const [transportista,setTransportista]=useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Nombre = sessionStorage.getItem('nombre')

  const obtenerPersona= async()=>{
    
    setShow(true)
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/usuario/listar/'+id,{
      headers:{'autorizacion':token}
    })

    console.log(respuesta.data)
    setIdUsuario(respuesta.data._id)
    setNombre(respuesta.data.nombre)
    setApellido(respuesta.data.apellido)
    setCedula(respuesta.data.cedula)
    setTelefono(respuesta.data.telefono)
    setCorreo(respuesta.data.correo)
    setUsername(respuesta.data.username)
    setContrasena(respuesta.data.contrasena)
    

  }

  const actualizar= async (e)=>{

    e.preventDefault();
    const id = idUsuario
    const token = sessionStorage.getItem('token')
    const usuario ={

      nombre,
      apellido,
      cedula,
      telefono,
      correo,
      username,
      contrasena


    }

    const respuesta = await Axios.put('/usuario/actualizar/'+id,usuario,{
      headers:{'autorizacion':token}

    })
    const mensaje = respuesta.data.mensaje
    obtenerPersona()

    Swal.fire({
      icon:'success',
      title:mensaje,
      showConfirmButton:false,
      timer:1500
    })

    setShow(false)
  }

  // const data =
  // usuarios.map((usuario)=>({
  //   id:persona._id,
  //   nombres:persona.nombres,
  //   apellidos:persona.apellidos,
  //   cedula:persona.cedula,
  //   telefono:persona.telefono,
  //   correo:persona.correo,
  //   username:persona.username,
  //   contrasena:persona.contrasena

  // }))

  return (
    <React.Fragment>
      <Container>
        <Image className="waw" src={waw}/>
        <div className="contiene">
          <div className="immg">
            <Image src={bg}/>
          </div>
          <div className="perfil-content">
            <form className="formulari" >
              <h2 className="titttle">Perfil</h2>
              <Row>
                <Col>
                  <div className="inputt-div one">
                    <div className="iii">
                      <FontAwesomeIcon icon={'user'} size="sm"/>
                    </div>
                    <div className="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre:"
                      >
                        <Form.Control
                          
                          // placeholder="Nombre:"
                          // required
                          onChange={(e)=>setNombre(e.target.value)}
                          value={sessionStorage.getItem('nombre')} 
                          className="control"
                          readonly
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="inputt-div one">
                    <div className="iii">
                      <FontAwesomeIcon icon={'user'} size="sm"/>
                    </div>
                    <div className="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Apellido:"
                      >
                        <Form.Control
                          onChange={(e)=>setApellido(e.target.value)}
                          value={sessionStorage.getItem('apellido')} 
                          
                          className="control"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>

              </Row>
              <Row>
                <Col>
                  <div className="inputt-div one">
                    <div className="iii">
                      <FontAwesomeIcon icon={'user'} size="sm"/>
                    </div>
                    <div className="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Cedula:"
                      >
                        <Form.Control
                          onChange={(e)=>setCedula (e.target.value)}
                          value={sessionStorage.getItem('cedula')} 
                          
                          className="control"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="inputt-div one">
                    <div className="iii">
                      <FontAwesomeIcon icon={'user'} size="sm"/>
                    </div>
                    <div className="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Telefono:"
                      >
                        <Form.Control
                          onChange={(e)=>setTelefono(e.target.value)}
                          value={sessionStorage.getItem('telefono')} 
                          className="control"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>

              </Row>
              <Row>
                <Col>
                  <div className="inputt-div one">
                    <div className="iii">
                      <FontAwesomeIcon icon={'user'} size="sm"/>
                    </div>
                    <div className="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Correo:"
                      >
                        <Form.Control
                          onChange={(e)=>setCorreo(e.target.value)}
                          value={sessionStorage.getItem('correo')} 
                          className="control"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="inputt-div one">
                    <div className="iii">
                      <FontAwesomeIcon icon={'user'} size="sm"/>
                    </div>
                    <div className="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Usuario:"
                      >
                        <Form.Control
                          onChange={(e)=>setUsername(e.target.value)}
                          value={sessionStorage.getItem('usuario')} 
                          className="control"
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>

              </Row>
              <Row>
                <Col>
                  <div class="inputt-div pass">
                    <div class="iii"> 
                      <FontAwesomeIcon icon={'lock'} size="sm"/>
                    </div>
                    <div class="div">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Contraseña:"
                      >
                        <Form.Control
                          value="Contacta con soporte para cambiarla"
                         
                          className="control"
                          
                        />
                      </FloatingLabel>
                    </div>
                  </div>
                </Col>
              </Row>
                
              <input type="button" onClick={handleShow} class="editar" value="Editar informacion"/>
            </form>
          </div>
        </div>



      </Container>


      {/* modal------------------------------------------------- */}

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar persona</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
            
              <div className="card-body">
                <form onSubmit={'guardar'}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombres</label>
                      <input type="text"  value={Nombre} onChange={(e)=>setNombre(e.target.value)}   />
                    </div>

                    <div className="col-md-6">
                      <label>Apellidos</label>
                      <input type="text" className="form-control required" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
                    </div>


                    {/* <div className="col-md-6">
                      <label>Cedula</label>
                      <input type="text" className="form-control required" />
                    </div> */}


                    {/* <div className="col-md-6">
                      <label>Telefono</label>
                      <input type="text" className="form-control required" />
                    </div> */}

                    
                  </div>
                    <br />
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={actualizar}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </React.Fragment>










    
  );

  }
  export default Perfil
