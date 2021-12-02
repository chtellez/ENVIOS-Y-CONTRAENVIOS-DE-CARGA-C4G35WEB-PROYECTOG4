import React, {createContext, useState, useMemo} from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {

  const [usuario, setUsuario] = useState('');
  const [esTransportista, setEsTransportista] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const actualizarUsuario = () => {
    setUsuario(!setUsuario)
  }

  const actualizarLogIn = async () => {
    setLoggedIn(await sessionStorage.getItem('token') === null ? false : true)
    setEsTransportista(await sessionStorage.getItem('transportista') === 'false' ? false : true)
  }

  const cerrarSesion = async () => {
    await sessionStorage.clear()
    actualizarLogIn()
  }

  return (

    <AuthContext.Provider value={{usuario, esTransportista, loggedIn, actualizarUsuario, actualizarLogIn, cerrarSesion}}>
      {children}
    </AuthContext.Provider>

  )
}

