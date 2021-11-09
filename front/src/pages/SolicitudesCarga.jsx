import React from "react";
import { Table, Card, Button, OverlayTrigger,Tooltip, Popover, ListGroup, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const realizarOferta = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Realizar oferta
    </Tooltip>
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

  
  const segundaSolicitud = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Viruta de bronce Cali - Barranquilla</Popover.Header>
      <Popover.Body>
        <Card.Text><strong>Volumen:</strong> 150 mts<sup>3</sup></Card.Text>
        <Card.Text><strong>Fecha de envío:</strong> 15 / Nov / 2021</Card.Text>
        <Card.Text><strong>Contenido:</strong>
        <ListGroup className="my-2">
            <ListGroup.Item>35 Bultos de Viruta de Bronce</ListGroup.Item>
            </ListGroup>
        </Card.Text>
        <Card.Text><strong>Observaciones:</strong> Cada bulto pesa 50Kgs.</Card.Text>
      </Popover.Body>
    </Popover>
  );

  
  const terceraSolicitud = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Envio Maquinaria Facatativá - Puerto Sargar</Popover.Header>
      <Popover.Body>
        <Card.Text><strong>Volumen:</strong> 350 mts<sup>3</sup></Card.Text>
        <Card.Text><strong>Fecha de envío:</strong> 18 / Nov / 2021</Card.Text>
        <Card.Text><strong>Contenido:</strong>
        <ListGroup className="my-2">
            <ListGroup.Item>1 Torno CNC</ListGroup.Item>
            </ListGroup>
        </Card.Text>
        <Card.Text><strong>Observaciones:</strong> Incluye herramientas</Card.Text>
      </Popover.Body>
    </Popover>
  );

  
  const cuartaSolicitud = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Mercancía Cúcuta - Leticia</Popover.Header>
      <Popover.Body>
        <Card.Text><strong>Volumen:</strong> 1.600 mts<sup>3</sup></Card.Text>
        <Card.Text><strong>Fecha de envío:</strong> 1 / Dic / 2021</Card.Text>
        <Card.Text><strong>Contenido:</strong>
        <ListGroup className="my-2">
            <ListGroup.Item>50 Cajas de 20*20</ListGroup.Item>
            <ListGroup.Item>25 Cajas de 30*40 Escritorio</ListGroup.Item>
            </ListGroup>
        </Card.Text>
        <Card.Text><strong>Observaciones:</strong> Mercancía delicada</Card.Text>
      </Popover.Body>
    </Popover>
  );

  
  const quintaSolicitud = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Bagazo de caña La paila - Quinamayo</Popover.Header>
      <Popover.Body>
        <Card.Text><strong>Volumen:</strong> 50.000 mts<sup>3</sup></Card.Text>
        <Card.Text><strong>Fecha de envío:</strong> 10 / Nov / 2021</Card.Text>
        <Card.Text><strong>Contenido:</strong>
        <ListGroup className="my-2">
            <ListGroup.Item>Bagazo de caña 50.000 mts<sup>3</sup></ListGroup.Item>
            </ListGroup>
        </Card.Text>
        <Card.Text><strong>Observaciones:</strong> Necesitamos transportar el bagazo de cañá desde nuestra plantación hasta la planta de BioDiesel</Card.Text>
      </Popover.Body>
    </Popover>
  );

  
  const sextaSolicitud = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Ganado Arauquita - Villavicencio</Popover.Header>
      <Popover.Body>
        <Card.Text><strong>Volumen:</strong> 5.000 mts<sup>3</sup></Card.Text>
        <Card.Text><strong>Fecha de envío:</strong> 25 / Nov / 2021</Card.Text>
        <Card.Text><strong>Contenido:</strong>
        <ListGroup className="my-2">
            <ListGroup.Item>2.000 cabezas de ganado</ListGroup.Item>
            </ListGroup>
        </Card.Text>
        <Card.Text><strong>Observaciones:</strong> Animales vivos</Card.Text>
      </Popover.Body>
    </Popover>
  );

const SolicitudesCarga = () => {
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
                            <tr>
                                <td>1</td>
                                <td>Bogotá</td>
                                <td>Medellín</td>
                                <td>Mudanza</td>
                                <td>24.000 mts<sup>3</sup></td>
                                <td>20/11/2021</td>
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={primerSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>
                                    
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={realizarOferta}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cali</td>
                                <td>Barranquilla</td>
                                <td>Viruta de bronce</td>
                                <td>150 mts<sup>3</sup></td>
                                <td>15/11/2021</td>
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={segundaSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>
                                    
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={realizarOferta}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Facatativá</td>
                                <td>Puerto Sargar</td>
                                <td>Envío maquinaria</td>
                                <td>350 mts<sup>3</sup></td>
                                <td>18/11/2021</td>
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={terceraSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>
                                    
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={realizarOferta}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Cucutá</td>
                                <td>Leticia</td>
                                <td>Mercancía</td>
                                <td>1600 mts<sup>3</sup></td>
                                <td>01/12/2021</td>
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={cuartaSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>
                                    
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={realizarOferta}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>La paila</td>
                                <td>Quinamayo</td>
                                <td>Bagazo de cañá</td>
                                <td>50.000 mts<sup>3</sup></td>
                                <td>10/11/2021</td>
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={quintaSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>
                                    
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={realizarOferta}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Arauquita</td>
                                <td>Villavicencio</td>
                                <td>Ganado</td>
                                <td>5.000 mts<sup>3</sup></td>
                                <td>25/11/2021</td>
                                <td>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={primerSolicitud}
                                        >
                                            <Button variant="primary" className="px-1 py-0" ><FontAwesomeIcon icon={'id-card'} size="sm"/></Button>
                                        </OverlayTrigger>
                                    
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={realizarOferta}
                                        >
                                            <Button variant="success" className="px-1 py-0" ><FontAwesomeIcon icon={'vote-yea'} size="sm"/></Button>
                                        </OverlayTrigger>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>
        
    </React.Fragment>
  );
};



export default SolicitudesCarga;
