import React, { useState } from 'react';
import "../styles/Aoferta.css";
import { Row, Col, Card, Accordion, Button, Modal,} from "react-bootstrap";
import img from "../assets/Hand-Truck.svg";
import CardVerOfertas from "../components/CardVerOfertas";
import Axios from 'axios'
import Swal from 'sweetalert2'

class AceptarOferta extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      StsOfertas: [
      //   {
      //     id:"1234",
      //     origen:"Pereira",
      //   destino:"Palmira",
      //   largo:"1",
      //   ancho:"2",
      //   alto:"3"
      // }
      ]
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
          // console.log(response);
      })
      .catch(e => {
        console.log(e);
      })

  }

    
  async ManejadorEliminar(idSolicitud) {
    
      const aux = idSolicitud;
      await Axios.delete('api/demanda/',{ data: { "_id": aux } })
         
        .then(response => {
          console.log(response);
          const mensaje= response.data.mensaje
          Swal.fire({
            title: '¿Segur@ de eliminar esta oferta?',
            text: "Esta accion es inreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar y eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Oferta eliminada',
                'Tu oferta a sido eliminada correctamente',
                'success'
              ) 
              this.CargaOfertasBD()
            }
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
          
            <CardVerOfertas
              key={oferta.id}
              // id={oferta.id}
              origen={oferta.origen}
              destino={oferta.destino}
              largo={oferta.largo}
              ancho={oferta.ancho}
              alto={oferta.alto}
              AlClick={() => this.ManejadorEliminar(oferta._id)}
            />
        );
      })
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="contenedor">
          <section className="section">
            {/* <Button onClick={() => this.CargaOfertasBD()}>click
            </Button> */}
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
            className=" justify-content-center"
            style={{ marginLeft: "2px" }}
          >
            
              {this.RenderizarOfertas()}
            
          </Row>
          <Modal
              // show={show}
              // onHide={handleClose}
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
              {/* <Button variant="primary" onClick={handleClose}>
                  Aceptar
              </Button> */}
              </Modal.Footer>
          </Modal>

          
        </div>
      </React.Fragment>
    );
  }
}

export default AceptarOferta;
