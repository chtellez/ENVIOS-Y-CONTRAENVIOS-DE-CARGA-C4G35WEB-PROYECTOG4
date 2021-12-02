import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {

  const [usuario, setUsuario] = useState(null);
  const [esTransportista, setEsTransportista] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const actualizarUsuario = () => {
    setUsuario(!setUsuario)
  }

  const actualizarLogIn = async () => {
    setLoggedIn(await sessionStorage.getItem('token') === null ? false : true)
    setEsTransportista(await sessionStorage.getItem('transportista') === 'false' ? false : true)
    setUsuario(await sessionStorage.getItem('usuario'))
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