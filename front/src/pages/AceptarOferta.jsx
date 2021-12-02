import React, { useState } from 'react';
import "../styles/Aoferta.css";
import { Row, Col, Card, Accordion, Button, Modal,} from "react-bootstrap";
import img from "../assets/Hand-Truck.svg";
import CardVerOfertas from "../components/CardVerOfertas";

class AceptarOferta extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      StsOfertas: []
    }
    this.CargaOfertasBD()
  }

  async CargaOfertasBD() {
    await Axios.get('api/demanda/')
      .then(response => {
        this.setState(
          {
            StsOfertas: response.data["body"],
          })
      })
      .catch(e => {
        console.log(e);
      })
  }

  RenderizarOfertas() {
    return (
      this.state.StsOfertas.map((oferta) => {
        return (
          <Col xs={12} sm={12} lg={12} className="mb-3 my-3">
            <CardVerOfertas
              key={oferta.id}
              TipoCarga={oferta.tipoCarga}
              Placa={oferta.placa}
              Capacidad={oferta.capacidad} />
          </Col>
        );
      })
    );
  }

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const obteneroferta= async()=>{
    
  //   // const id = sessionStorage.getItem('idUsuario')
  //   const respuesta = await Axios.get('api/vehiculo/')
  //   .then(response => {
  //     this.setState(
  //       {
  //         StsOfertas: response.data["body"],
  //       })
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   })

  //   setIdOferta(respuesta.data._id)
  //   setOrigen(respuesta.data.origen)
  //   setDestino(respuesta.data.destino)
  //   setLargo(respuesta.data.largo)
  //   setAncho(respuesta.data.ancho)
  //   setAlto(respuesta.data.alto)
  //   setPeso(respuesta.data.peso)
  //   setTipo(respuesta.data.tipo)
    
  // }
  // const data =
  // ofertas.map((oferta)=>({
  //   id:oferta._id,
  //   origen:oferta.origen,
  //   destino:oferta.destino,
  //   largo:oferta.largo,
  //   ancho:oferta.ancho,
  //   alto:oferta.alto,
  //   peso:oferta.peso,
  //   tipo:oferta.tipo

  // }))
  render() {
    return (
      <React.Fragment>
        <div className="contenedor">
          <section className="section">
            <Row>
              <Col
                xs={6}
                sm={6}
                md={{ span: 4, offset: 1 }}
                lg={{ span: 4, offset: 1 }}
              >
                <span className="content">
                  <h2>MIS OFERTAS </h2>
                  <p>
                    Visualiza las ofertas que has publicado y las respuestas
                    de transportistas.
                  </p>
                </span>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={{ span: 4, offset: 2 }}
                lg={{ span: 4, offset: 2 }}
                className="align-self-end"
              >
                <img
                  src={img}
                  className="img"
                  alt="Una carretilla para llevar paquetes"
                />
              </Col>
              <Col>
                <svg
                  className="wave"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#fff"
                    // fill-opacity="1"
                    d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </Col>
            </Row>
          </section>
          <br></br>
          <Row
            className="ml-5 justify-content-center"
            style={{ marginLeft: "22px" }}
          >
            <Col xs={6} sm={6} md={3} lg={3} className="mb-5">
              {this.Renderizarofertass()}
            </Col>
          </Row>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
              <Modal.Header closeButton>
              <Modal.Title>Informacion Del Conductor</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              Nombre, Apellido, vehiculo placa.
              </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                  Aceptar
              </Button>
              </Modal.Footer>
          </Modal>

          
        </div>
      </React.Fragment>
    );
  }
}

export default AceptarOferta;
