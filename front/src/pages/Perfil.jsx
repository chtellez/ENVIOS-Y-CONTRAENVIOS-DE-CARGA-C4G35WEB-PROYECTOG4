import React from "react";
import { Row, Col, Card, Accordion, Button, Image } from "react-bootstrap";

export default function Perfil() {
  return (
    <div>
      <Row>
        <Col>
          <h2>AQUI VA EL FORMULARIO</h2>
        </Col>
        <Col>
          <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="buble">
              <path
                fill="#F1C21B"
                d="M52.8,-56.8C64.1,-41.5,66,-20.8,67.2,1.2C68.5,23.3,69.1,46.5,57.8,61.2C46.5,75.8,23.3,81.9,3.4,78.5C-16.5,75.1,-33,62.3,-48.3,47.6C-63.6,33,-77.7,16.5,-77.9,-0.2C-78.1,-16.9,-64.4,-33.8,-49.1,-49.1C-33.8,-64.4,-16.9,-78.1,1.9,-80.1C20.8,-82,41.5,-72.2,52.8,-56.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </Col>
      </Row>
    </div>
  );
}
