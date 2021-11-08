import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

import "../styles/NavBar.css";

function App() {
  return (
    <div className="App">
      <Nav className="justify-content-end" activeKey="/inicio">
        <Nav.Item>
          <Nav.Link href="/inicio" className="text-dark">
            Nosotros
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="text-dark">
            Servicios
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="text-dark">
            PQRS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-dark">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="text-dark">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/crear_oferta" className="text-dark">
            Crear Oferta
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
