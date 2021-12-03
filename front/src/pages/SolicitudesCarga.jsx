import React, {useContext, useEffect, useState} from "react";
import { Table, Card, Button, Form, FloatingLabel, Row, Col, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SolicitudesContext } from '../context/SolicitudesContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Axios from 'axios'

  function MyVerticallyCenteredModal() {

    const {modalShow, setModalShow, origenOferta, destinoOferta, fechaOferta, setFechaOferta,
            fechaValidez, setFechaValidez, setOfertaAceptada, vehiculos, actualizarVehiculos,
            setTiempoEntrega, tiempoEntrega, precio, setPrecio,placa, setPlaca} = useContext(SolicitudesContext);

    useEffect(()=>{
      actualizarVehiculos();
    },[])

    const guardarOferta = async ()=> {
      await Axios.post('api/ofertas', {
        user:sessionStorage.getItem('idUsuario'),
        precio:precio,
        fechaRecogida:fechaOferta,
        horaRecogida:"",
        tiempoDeEntrega:tiempoEntrega,
        validez:fechaValidez,
        aceptada:false,
        vehiculo:placa
      })
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        })
    }


    const columns = [{
      dataField: 'tipoCarga',
      text: 'Tipo Carga'
    },
    {
      dataField: 'placa',
      text: 'Placa'
    }, {
      dataField: 'capacidad',
      text: 'Capacidad'
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      style: { backgroundColor: 'lightGrey' }
    };

    return (
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Crear oferta: {origenOferta} - {destinoOferta}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Precio Oferta</Form.Label>
                        <Form.Control type="number" placeholder="0" onChange={(event) => {setPrecio(event.target.value)}}/>
                      </Form.Group>
                    </Col>
                    <Col className="col-12">
                      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                        < Form.Label>Hora Recogida</Form.Label>
                        <DatePicker
                          id="datePicker"
                          isClearable
                          showTimeSelect
                          className="form-control"
                          selected={fechaOferta}
                          onChange={(date) => setFechaOferta(date)}
                          locale="es-CO"
                          timeFormat="p"
                          timeIntervals={15}
                          dateFormat="Pp"/>
                      </Form.Group>
                    </Col>
                    <Col >
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tiempo de entrega</Form.Label>
                        <Form.Control type="number" placeholder="0" onChange={(event) => {setTiempoEntrega(event.target.value)}}/>
                      </Form.Group>
                    </Col>
                    <Col >
                      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                        < Form.Label>Fecha de validez</Form.Label>
                        <DatePicker
                          id="datePicker"
                          isClearable
                          className="form-control"
                          selected={fechaValidez}
                          onChange={(date) => setFechaValidez(date)}
                          locale="es-CO"
                          dateFormat="P"/>
                      </Form.Group>
                    </Col>
                  </Row>

                </Col>
                <Col>
                  <Row>
                    <Col className="col-12">
                      <Card.Title>Vechículo</Card.Title>


                      <BootstrapTable
                        keyField='_id'
                        data={ vehiculos }
                        columns={ columns }
                        selectRow={ selectRow }
                        onSelect={(row, isSelect, rowIndex, e) => {
                          setPlaca(e.target.value)
                        }}
                      />
                    </Col>

                  </Row>
                </Col>

                <FloatingLabel
                  controlId="floatingInput"
                ></FloatingLabel>
              </Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Guardar </Button>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const SolicitudesCarga = () => {

  // const [modalShow, setModalShow] = useState(false);
  const {solicitudes,
          actualizarSolicitudes,
          setModalShow,
          setOrigenOferta,
          setDestinoOferta} = useContext(SolicitudesContext);

  useEffect(()=>{
    actualizarSolicitudes();
  },[])


  function CargarValoresOferta(solicitud){
    setOrigenOferta(solicitud.origen)
    setDestinoOferta(solicitud.destino)
  }

  return (
    <React.Fragment>
      <MyVerticallyCenteredModal/>
        <Card style={{ width: '100%' }} className="m-3">
            <Card.Body>
                <Card.Title>Solicitudes de carga</Card.Title>

                    <Table striped bordered hover size="sm" >
                        <thead>
                            <tr>
                            <th>Id Orden</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Descripción</th>
                            <th>Volumen</th>
                            <th>Fecha</th>
                            <th>Ops</th>
                            </tr>
                        </thead>
                        <tbody>
                          {solicitudes.map((solicitud) => {
                            return (
                              <tr>
                                <td>{solicitud._id}</td>
                                <td>{solicitud.origen}</td>
                                <td>{solicitud.destino}</td>
                                <td>{solicitud.tipo}</td>
                                <td>{solicitud.volumen}</td>
                                <td>{solicitud.fechaRecogida}</td>
                                <td><Button variant="success" className="px-1 py-0" onClick={() => {CargarValoresOferta(solicitud); setModalShow(true)}}><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button></td>
                              </tr>
                            );
                          })}
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>

    </React.Fragment>
  );
};



export default SolicitudesCarga;
