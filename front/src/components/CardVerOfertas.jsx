import React, { useState } from 'react';
import {Card, Accordion, Button, Modal} from "react-bootstrap";
import "../styles/Aoferta.css";



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
                    Descripcion breve de la oferta
                </Card.Subtitle>
            <Card.Text>
                <Accordion defaultActiveKey="1" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ver propuestas</Accordion.Header>
                        <Accordion.Body>
                            <Card style={{ width: "auto" }}>
                                <Card.Header>Propuesta 1</Card.Header>
                                <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Fecha y Hora
                                </Card.Subtitle>
                                <Card.Text>Precio</Card.Text>
                                <Button
                                    variant="warning"
                                    id="pagar"
                                    href="#"
                                    onClick={this.props.handleShow}
                                >
                                    Pagar
                                </Button>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Text>
            
            <Button variant="danger"
                onClick={this.props.AlClick}> Eliminar
                </Button>
            
            </Card.Body>
        </Card>
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