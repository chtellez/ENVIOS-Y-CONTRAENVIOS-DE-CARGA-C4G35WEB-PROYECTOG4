import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core/"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faHome, faListAlt, faBuilding, faTruckMoving, faSignInAlt, faRegistered, faTruckLoading, faIdCard, faVoteYea, faCheck } from "@fortawesome/free-solid-svg-icons"

import AgregarVehiculo from "../pages/AgregarVehiculo";
import Layout from './Layout'
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import CrearOferta from "../pages/CrearOferta";
import AceptarOferta from "../pages/AceptarOferta";
import Perfil from "../pages/Perfil";
import Footer from "./Footer";
import SolicitudesCarga from "../pages/SolicitudesCarga";


library.add(faUser, fab, faHome, faListAlt, faBuilding, faTruckMoving, faSignInAlt, faRegistered, faTruckLoading, faIdCard, faVoteYea, faCheck)


// import CrearOferta from "../pages/CrearOferta";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar></NavigationBar>
      </header>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/crear_oferta" element={<CrearOferta />}></Route>
            <Route exact path="/solicitudes" element={<SolicitudesCarga />}></Route>
            <Route exact path="/aceptar_oferta" element={<AceptarOferta />}></Route>
            <Route exact path="/perfil" element={<Perfil />}></Route>
            <Route exact path="/AgregarVehiculo" element={<AgregarVehiculo/>}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
