import React from "react";
import loginImg from "../assets/login.svg";
import "../styles/login.scss";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      password:'',
    }
  }

  handleClick(){
    alert('Change function')
  }

  async handleChange(e){
    if(e.target.name == 'username'){
      await this.setState({
        username: e.target.value,
      });
    }else{
      await this.setState({
        password: e.target.value,
      });
    }
    
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
              <input type="text" name="email" placeholder="Ingrese su email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Ingrese su contraseña" onChange={this.handleChange}/>
            </div>
          </div>
        </div>
        <div>
        
        <p>¿No tienes cuenta? <a href="/register">Registrate!</a></p>
          <button onClick={this.handleChange} type="button" className="btn">
            Login
          </button>
          
          <br /><br /><br /><br />
        </div>
      </div>
    );
  }
}
export default Login;
