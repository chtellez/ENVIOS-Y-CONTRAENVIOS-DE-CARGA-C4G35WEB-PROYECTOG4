import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core/"
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faUser, faArrowRight, faLock, faShippingFast, faPeopleCarry,faAddressCard,faHome, faListAlt, faBuilding, faTruckMoving, faSignInAlt, faRegistered, faTruckLoading, faIdCard, faVoteYea, faCheck } from "@fortawesome/free-solid-svg-icons"

import "../styles/Scroll.css";

import PagAgregarVehiculo from "../pages/PagAgregarVehiculo";
import Layout from './Layout'
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import CrearOferta from "../pages/CrearOferta";
import AceptarOferta from "../pages/AceptarOferta";
import Perfil from "../pages/Perfil";
import InicioSesion from "../pages/login";
import Register from "../pages/register"
import Footer from "./Footer";
import SolicitudesCarga from "../pages/SolicitudesCarga";
import AuthContextProvider from "../context/AuthContext";


library.add(fab, faArrowRight, faLock, faHome, faListAlt, faBuilding, faTruckMoving, faSignInAlt, faRegistered, faTruckLoading, faIdCard, faVoteYea, faCheck, faAddressCard, faPeopleCarry, faShippingFast, faUser)



// import CrearOferta from "../pages/CrearOferta";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
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
              <Route exact path="/login" element={<InicioSesion />}></Route>
              <Route exact path="/register" element={<Register />}></Route>
              <Route exact path="/perfil" element={<Perfil />}></Route>
              <Route exact path="/PagAgregarVehiculo" element={<PagAgregarVehiculo/>}></Route>
            </Routes>
          </BrowserRouter>
        </Layout>
        <footer>
          <Footer/>
        </footer>
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
