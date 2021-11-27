import React, {createContext, useState, useMemo} from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {

  const [usuario, setUsuario] = useState('');
  const [esTransportista, setEsTransportista] = useState(sessionStorage.getItem('transportista'));
  const [loggedIn, setloggedIn] = useState(sessionStorage.getItem('logIn'));

  const actualizarUsuario = () => {
    setUsuario(!setUsuario)
  }

  const validarAuth = async () => {
    const logIn = await JSON.parse(sessionStorage.getItem('logIn')) === true ? false : true
    setloggedIn(logIn)
    const transportista = await JSON.parse(sessionStorage.getItem('transportista')) === true ? false : true
    setEsTransportista(transportista)
  }

  const actualizarEsTransportista = async () => {
    const transportista = await JSON.parse(sessionStorage.getItem('transportista')) === true ? false : true
    await sessionStorage.setItem('transportista',  transportista)
    setEsTransportista(transportista)
  }

  const actualizarLogIn = async () => {
    const logIn = await JSON.parse(sessionStorage.getItem('logIn')) === true ? false : true
    await sessionStorage.setItem('logIn',  logIn)
    setloggedIn(logIn)
  }

  return (

    <AuthContext.Provider value={{usuario, esTransportista, loggedIn, actualizarUsuario, actualizarLogIn, actualizarEsTransportista, validarAuth}}>
      {children}
    </AuthContext.Provider>

  )
}

