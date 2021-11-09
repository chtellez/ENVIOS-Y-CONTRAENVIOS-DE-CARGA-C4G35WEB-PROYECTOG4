import React from "react";
import fondopg from "../Img/fondopg.jpg";

const Home = () => {
  return (
    <img
      src={fondopg}
      className="App-fondo vh-100"
      alt="fondo"
      style={{ width: "100%", height: "700px" }}
    />
  );
};

export default Home;
