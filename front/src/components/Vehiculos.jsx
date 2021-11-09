import React from "react";
import { Table, Card, Button, OverlayTrigger,Tooltip, Popover, ListGroup, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const realizarOferta = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Vehiculo seleccionado
    </Tooltip>
  );


const Vehiculos = () => {
  return (
    <React.Fragment>
        <Card style={{ width: '100%' }} className="">
            <Card.Body>

                    <Table striped bordered hover size="sm" >
                        <thead>
                            <tr>
                            <th>Ops</th>
                            <th>Placa</th>
                            <th>Marca</th>
                            <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={realizarOferta}
                                    >
                                        <Button variant="info" className="px-1 py-0" ><FontAwesomeIcon icon={'check'} size="sm"/></Button>
                                    </OverlayTrigger>
                                </td>
                                <td>JQK-547</td>
                                <td>Chevrolet</td>
                                <td>NKR</td>
                            </tr>
                            <tr>
                                <td>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={realizarOferta}
                                    >
                                        <Button variant="info" className="px-1 py-0" ><FontAwesomeIcon icon={'check'} size="sm"/></Button>
                                    </OverlayTrigger>
                                </td>
                                <td>PHK-424</td>
                                <td>Kenword</td>
                                <td>Tractomula</td>
                            </tr>
                            <tr>
                                <td>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={realizarOferta}
                                    >
                                        <Button variant="info" className="px-1 py-0" ><FontAwesomeIcon icon={'check'} size="sm"/></Button>
                                    </OverlayTrigger>
                                </td>
                                <td>JBD-007</td>
                                <td>Skania</td>
                                <td>6 Ejes cubierto</td>
                            </tr>
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>
        
    </React.Fragment>
  );
};



export default Vehiculos;
