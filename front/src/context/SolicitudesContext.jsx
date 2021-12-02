import React, {createContext, useState} from 'react';
import Axios from 'axios'

import { getSolicitudes } from "../services/solicitudService";

export const SolicitudesContext = createContext();

export default function SolicitudesContextProvider({children}) {


  const [solicitudes, setSolicitudes] = useState([]);

  const actualizarSolicitudes = async () => {
    try {
      // const res = await getSolicitudes()
      // console.log(res)
      // setSolicitudes(res);
      const res = await Axios.get('api/solicitudes')
      setSolicitudes(res.data["body"])
      console.log(solicitudes)
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