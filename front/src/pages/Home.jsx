import React from "react";
import fondopg from "../Img/fondopg.jpg";
import "../styles/Home.css";
import { Card} from  "react-bootstrap"
const Home = () => {
  return (
    <React.Fragment> 
      <Card className="bg-dark text-white App-fondo vh-100 vw-100" id="contenedor"
            > 
          <Card.Img src={fondopg}  /> 
          <Card.ImgOverlay className="mt-5 pl-5" id="texto">
            <Card.Title className="fs-1">Quienes somos </Card.Title> 
            <Card.Text className="col-md-4 " > 
              Procuramos facilitar la distribución de forma segura de la mercancía de 
              nuestros clientes y entregarla a la mayor brevedad posible.
            </Card.Text>
         
          </Card.ImgOverlay>
      </Card>
    </React.Fragment>
  );
};

export default Home;
