import { Button, Form } from "react-bootstrap";
import React, { useState } from 'react';

class FormNuevoVehiculo extends React.Component {
  constructor(props) {
    super(props);
  }

  ManejadorBtnAgregar() {
    console.log("Se presionó agregar");
  }

  ManejadorBtnActualizar() {
    console.log("Se presionó actualizar");
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="TipoCarga">
            <Form.Label>Tipo de carga</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Acarreo</option>
              <option value="2">Carga viva</option>
              <option value="3">Líquidos</option>
              <option value="4">Alimentos refrigerados</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Placa">
            <Form.Label>Placa</Form.Label>
            <Form.Control type="text" placeholder="Entre Placa" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Capacidad">
            <Form.Label>Capacidad</Form.Label>
            <Form.Control type="text" placeholder="Entre Capacidad Carga" />
          </Form.Group>
        </Form>
        <Button variant="secondary" type="submit"
          onClick={() => this.ManejadorBtnAgregar()}>
          Agregar Vehículo
        </Button>
      </>
    );
  }
}
export default FormNuevoVehiculo;