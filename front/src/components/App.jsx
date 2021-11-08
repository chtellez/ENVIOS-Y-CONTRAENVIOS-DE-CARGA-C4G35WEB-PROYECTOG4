import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import CrearOferta from "../pages/CrearOferta";

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
        </Routes>
      </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
