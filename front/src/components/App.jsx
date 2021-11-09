import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core/"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faListAlt, faBuilding, faTruckMoving, faSignInAlt, faRegistered, faTruckLoading } from "@fortawesome/free-solid-svg-icons"

import Layout from './Layout'
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import CrearOferta from "../pages/CrearOferta";
import CrearSolicitudCarga from "../pages/CrearSolicitudCarga";
import Footer from "./Footer";


library.add(fab, faHome, faListAlt, faBuilding, faTruckMoving, faSignInAlt, faRegistered, faTruckLoading)


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
            <Route exact path="/crear_solicitud_carga" element={<CrearSolicitudCarga />}></Route>
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
