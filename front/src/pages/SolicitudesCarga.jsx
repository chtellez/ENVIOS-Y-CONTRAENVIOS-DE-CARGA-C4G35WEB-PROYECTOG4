import React, {useContext, useEffect} from "react";
import { Table, Card, Button, OverlayTrigger, Popover, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Vehiculos from "../components/Vehiculos";
import { SolicitudesContext } from '../context/SolicitudesContext';

  const mostrarVehiculos = (
    <Popover id="popover-basic" style={{ width:"1000px"}}>
      <Popover.Header as="h3">Vehículos Registrados</Popover.Header>
      <Popover.Body>
        <Vehiculos/>
      </Popover.Body>
    </Popover>
  );

  const primerSolicitud = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Mudanza Bogotá-Medellin</Popover.Header>
      <Popover.Body>
        <Card.Text><strong>Volumen:</strong> 24.000 mts<sup>3</sup></Card.Text>
        <Card.Text><strong>Fecha de envío:</strong> 20 / Nov / 2021</Card.Text>
        <Card.Text><strong>Contenido:</strong>
        <ListGroup className="my-2">
            <ListGroup.Item>55 Cajas de 30*20*30</ListGroup.Item>
            <ListGroup.Item>2 Escritorios</ListGroup.Item>
            <ListGroup.Item>2 Televisores</ListGroup.Item>
            <ListGroup.Item>17 Bolsas industriales con cosas</ListGroup.Item>
            <ListGroup.Item>1 Nevera y 1 Lavadora</ListGroup.Item>
            <ListGroup.Item>1 Sofa de 3 puestos</ListGroup.Item>
            <ListGroup.Item>1 Comedor con 6 sillas</ListGroup.Item>
            <ListGroup.Item>1 Impresora de tinta y 1 Impresora 3D</ListGroup.Item>
            <ListGroup.Item>1 Cama doble con colchon</ListGroup.Item>
            <ListGroup.Item>2 Camas sensillas con colchon</ListGroup.Item>
            <ListGroup.Item>3 Bicicletas</ListGroup.Item>
            <ListGroup.Item>1 Equipo de sonido</ListGroup.Item>
            </ListGroup>
        </Card.Text>
        <Card.Text><strong>Observaciones:</strong> Estoy en una casa de dos pisos y voy para un piso 31 con ascensor</Card.Text>
      </Popover.Body>
    </Popover>
  );


const SolicitudesCarga = () => {


  const {solicitudes, actualizarSolicitudes} = useContext(SolicitudesContext);

  useEffect(()=>{
    actualizarSolicitudes();
    console.log(solicitudes)
  },[])

  // componentDidMount(){
  //   actualizarSolicitudes();
  // }

  return (
    <React.Fragment>
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
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={primerSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            trigger="click"
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={mostrarVehiculos}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
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
