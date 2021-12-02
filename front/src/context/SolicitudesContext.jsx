import React, {createContext, useState} from 'react';
import Axios from 'axios'

// import { getSolicitudes } from "../services/solicitudService";

export const SolicitudesContext = createContext();

export default function SolicitudesContextProvider({children}) {


  const [solicitudes, setSolicitudes] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [origenOferta, setOrigenOferta] = useState('');
  const [destinoOferta, setDestinoOferta] = useState('');
  const [fechaOferta, setFechaOferta] = useState('');
  const [fechaValidez, setFechaValidez] = useState('');
  const [ofertaAceptada, setOfertaAceptada] = useState(false);
  const [precio, setPrecio] = useState(0);
  const [tiempoEntrega, setTiempoEntrega] = useState('');

  const actualizarSolicitudes = async () => {
    try {
      const res = await Axios.get('api/solicitudes')
      setSolicitudes(res.data["body"])
    } catch (error) {
      console.error(error);
    }
  }

  const actualizarVehiculos = async () => {
    try {
      const res = await Axios.get('api/vehiculo')
      setVehiculos(res.data["body"])
    } catch (error) {
        console.log(error)
    }

  }

  const [modalShow, setModalShow] = useState(false);


  return (

    <SolicitudesContext.Provider value={{solicitudes, actualizarSolicitudes,
                                          modalShow, setModalShow,
                                          origenOferta, setOrigenOferta,
                                          destinoOferta, setDestinoOferta,
                                          fechaOferta, setFechaOferta,
                                          fechaValidez, setFechaValidez,
                                          ofertaAceptada, setOfertaAceptada,
                                          vehiculos, actualizarVehiculos,
                                          precio, setPrecio,
                                          tiempoEntrega, setTiempoEntrega

    }}>
      {children}
    </SolicitudesContext.Provider>

  )
}