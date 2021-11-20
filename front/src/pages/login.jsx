import React from "react";
import loginImg from "../assets/login.svg";
import "../styles/login.scss";
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
        <br />
        <div className="header">Inicio Sesión</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="fondo_login" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Ingrese su email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Ingrese su contraseña" />
            </div>
          </div>
        </div>
        <div>
        
        <p>¿No tienes cuenta? <a href="/">Registrate!</a></p>
          <button type="button" className="btn">
            Login
          </button>
          
          <br /><br /><br />
        </div>
      </div>
    );
  }
}
export default Login;
