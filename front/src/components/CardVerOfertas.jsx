import React, { useState } from 'react';
import {Card, Accordion, Button, Col} from "react-bootstrap";
import "../styles/Aoferta.css";
import CardPropuestas from "../components/CardPropuestas";



// function CardVerOfertas(){

//     constructor(props) {
//         super(props);
//     }

// }
// export default CardVerOfertas;

class CardVerOfertas extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
      return (
        <Col xs={6} sm={6} md={3} lg={3} className="mb-5">

            <Card style={{ width: "auto", borderRadius: "20px", elevation: 3 }}
                className="Cardsita"
            >
                <Card.Header style={{
                    backgroundColor: "#53b7f1",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                {this.props._id} 
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        <ul>
                            <li><strong>Id: </strong>{this.props.key}</li>
                            <li><strong>Origen: </strong>{this.props.origen}</li>
                            <li><strong>Destino: </strong>{this.props.destino}</li>
                            <li><strong>Largo: </strong>{this.props.largo}</li>
                            <li><strong>Ancho: </strong>{this.props.ancho}</li>
                            <li><strong>Alto: </strong>{this.props.alto}</li>
                        </ul>
                    </Card.Subtitle>
                
                <Card.Text>
                    <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ver propuestas</Accordion.Header>
                            <Accordion.Body>
                                <CardPropuestas/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Text>
                
                <Button variant="danger"
                    onClick={this.props.AlClick}> Eliminar
                    </Button>
                
                </Card.Body>
            </Card>
        </Col>
      );
    }
  }
  export default CardVerOfertas;

//   <Card
//             style={{ width: "auto", borderRadius: "20px", elevation: 3 }}
//             className="Cardsita"
//         >
//             <Card.Header
//             style={{
//                 backgroundColor: "#53b7f1",
//                 borderTopLeftRadius: 20,
//                 borderTopRightRadius: 20,
//             }}
//             >
//             Oferta 1
//             </Card.Header>
//             <Card.Body>
//             <Card.Subtitle className="mb-2 text-muted">
//                 Descripcion breve de la oferta
//             </Card.Subtitle>
//             <Card.Text>
//                 <Accordion defaultActiveKey="1" flush>
//                 <Accordion.Item eventKey="0">
//                     <Accordion.Header>Ver propuestas</Accordion.Header>
//                     <Accordion.Body>
//                     <Card style={{ width: "auto" }}>
//                         <Card.Header>Propuesta 1</Card.Header>
//                         <Card.Body>
//                         <Card.Subtitle className="mb-2 text-muted">
//                             Fecha y Hora
//                         </Card.Subtitle>
//                         <Card.Text>Precio</Card.Text>
//                         <Button
//                             variant="warning"
//                             id="pagar"
//                             href="#"
//                             onClick={handleShow}
//                         >
//                             Pagar
//                         </Button>
//                         </Card.Body>
//                     </Card>
//                     </Accordion.Body>
//                 </Accordion.Item>
//                 </Accordion>
//             </Card.Text>
//             </Card.Body>
//         </Card>
//         <Modal
//             show={show}
//             onHide={handleClose}
//             backdrop="static"
//             keyboard={false}
//         >
//             <Modal.Header closeButton>
//             <Modal.Title>Informacion Del Conductor</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//             Nombre, Apellido, vehiculo placa.
//             </Modal.Body>
//             <Modal.Footer>
//             <Button variant="primary" onClick={handleClose}>
//                 Aceptar
//             </Button>
//             </Modal.Footer>
//         </Modal>