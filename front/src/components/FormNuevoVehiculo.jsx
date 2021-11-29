import { Button, Form } from "react-bootstrap";
import React from 'react';
import Axios from 'axios'

class FormNuevoVehiculo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var btn = document.getElementById('btnAgregar');
    btn.addEventListener('click',this.ManejadorBtnAgregar);
    btn.addEventListener('click',this.props.actualizarCards);
  }

  async ManejadorBtnAgregar() {
    // sessionStorage.setItem('idUsuario', 'Sebastian');
    // console.log("Antes de axios agregar vehiculo . El usuario es: " + sessionStorage.getItem('idUsuario'));

    const e = document.getElementById("ddlTipoCarga");
    const TextoTipoCarga = e.options[e.selectedIndex].text;

    const f = document.getElementById("CtrlPlaca")
    const TextoPlaca = f.value;

    const g = document.getElementById("CtrlCapacidad")
    const TextoCapacidad = g.value;  
    
    const TextoUsuario = sessionStorage.getItem('idUsuario');

    await Axios.post('api/vehiculo/agregar', {
      tipoCarga: TextoTipoCarga,
      placa: TextoPlaca,
      capacidad: TextoCapacidad,
      idUsuario: TextoUsuario
    })
      .then(response => {
        // console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="ddlTipoCarga">
            <Form.Label>Tipo de carga</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Acarreo</option>
              <option value="2">Carga viva</option>
              <option value="3">Líquidos</option>
              <option value="4">Alimentos refrigerados</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="CtrlPlaca">
            <Form.Label>Placa</Form.Label>
            <Form.Control type="text" placeholder="Entre Placa"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="CtrlCapacidad">
            <Form.Label>Capacidad</Form.Label>
            <Form.Control type="text" placeholder="Entre Capacidad Carga"/>
          </Form.Group>
        </Form>
        <Button variant="secondary" type="submit" id="btnAgregar">
          Agregar Vehículo
        </Button>
      </>
    );
  }
}
export default FormNuevoVehiculo;