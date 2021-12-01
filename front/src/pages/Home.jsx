import React from "react";
import fondopg from "../Img/fondopg.jpg";
import "../styles/Home.css";
import { Card,Row,Col,Image} from  "react-bootstrap";
import img from "../assets/img3.svg";
import img2 from "../assets/solicitud.png";
import img3 from "../assets/buscar.png";
import img4 from "../assets/caja-de-carga.png";
const Home = () => {
  return (
    <React.Fragment >
      {/* <Card className="bg-dark text-white App-fondo vh-100 vw-100" id="contenedor"
            >
          <Card.Img src={fondopg}  />
          <Card.ImgOverlay className="mt-5 pl-5" id="texto">
            <Card.Title className="fs-1">Quienes somos </Card.Title>
            <Card.Text className="col-md-4 " >
              Procuramos facilitar la distribución de forma segura de la mercancía de
              nuestros clientes y entregarla a la mayor brevedad posible.
            </Card.Text>

          </Card.ImgOverlay>
      </Card> */}

     
      <div className="contentx" >
        <div className="bgimg-1">
          <div className="caption">
          
          <h1 className="titulis justify-content-center">¡Con nosotros tus envios seran seguros y eficientes!</h1>
          {/* <a href="/register" style={{textDecoration: "none"}}><span className="border">V</span></a> */}
          </div>
          <svg
          className="wave2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            // fill-opacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        </div>
        

        <div className="probl">
          
          <Row>
            <Col>
              <h1 className="text">Quienes Somos</h1>
              <p className="labia">Somos un proyecto que pretende facilitar la distribución de mercancía de nuestros clientes de forma segura y entregarla a la mayor brevedad posible. Con esto también buscamos beneficiar a todos los transportistas registrados en nuestra plataforma con el fin de que puedan prestar sus servicios de transporte a quien lo solicite</p>
            </Col>
            <Col>
            <Image className="imgabout" src={img}></Image>
            
            </Col>
          </Row>
          
        </div>

      <div className="bgimg-2">
        <div className="caption2">
          <Row className="justify-content-center" >
            <Col>
              <Image className="img2" src={img2}></Image>
              <p className="labia2">Como cliente tienes la posibilidad de hacer solicitudes de carga y poderlas visualizar o eliminar</p>
            </Col>
            <Col>
              <Image className="img3" src={img3}></Image>
              <p className="labia2">Como transportista revisa las ofertas que se ajusten a tus necesidades y manda solicitud</p>
            </Col>
            <Col>
              <Image className="img4" src={img4}></Image>
              <p className="labia2">Facilitamos el proceso para que tu carga llegue a donde la necesitas</p>
            
            </Col>
            
            
          </Row>
        </div>
      </div>

      
      </div>

    </React.Fragment>
  );
};

export default Home;
