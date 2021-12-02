const store = require('./store');
const response = require('../../network/response');

async function getVehiculos(req, res){
  try {
    const vehiculos = await store.list()
    response.success(req, res, vehiculos, 200)
  } catch (error) {
      response.error(req, res, 'Error al consultar los vehículos', 500, error)
  }
}

async function addVehiculo(req, res) {
  try {
    const vehiculo = req.body;
    const newVehiculo = await store.add(vehiculo)
    response.success(req,res, newVehiculo,201)
  } catch (error) {
    response.error(req, res, 'Error al crear el vehículo', 500, error)
  }
}

async function deleteVehiculo(req, res) {
  try {
    const idVehiculo = req.body;
    const newVehiculo = await store.del(idVehiculo);
    response.success(req,res, res.json(newVehiculo),201)
  } catch (error) {
    response.error(req, res, 'Error al eliminar el vehículo', 500, error)
  }
}

module.exports = {
  getVehiculos,
  addVehiculo,
  deleteVehiculo,
}