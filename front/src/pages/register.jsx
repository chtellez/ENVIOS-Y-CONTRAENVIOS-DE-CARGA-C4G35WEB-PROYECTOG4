import React from "react";
import loginImg from "../assets/login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Registrarse</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="fondo_register" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username"></label>
              <input type="text" name="username" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="username"></label>
              <input type="text" name="username" placeholder="Apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="text" name="password" placeholder="Contraseña" />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="text" name="password" placeholder="Confirma tu contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default Register;