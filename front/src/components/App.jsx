import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import CrearOferta from "../pages/CrearOferta";
import InicioSesion from "../pages/login";
import Register from "../pages/register"

// import CrearOferta from "../pages/CrearOferta";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/crear_oferta" element={<CrearOferta />}></Route>
          <Route exact path="/login" element={<InicioSesion />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
