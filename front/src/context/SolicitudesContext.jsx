import React, {createContext, useState} from 'react';

import { getSolicitudes } from "../services/solicitudService";

export const SolicitudesContext = createContext();

export default function SolicitudesContextProvider({children}) {


  const [solicitudes, setSolicitudes] = useState([]);


  const actualizarSolicitudes = async () => {
    try {
      setSolicitudes(await getSolicitudes().data);
    } catch (error) {
      console.error(error);
    }

  }

  return (

    <SolicitudesContext.Provider value={{solicitudes, actualizarSolicitudes}}>
      {children}
    </SolicitudesContext.Provider>

  )
}