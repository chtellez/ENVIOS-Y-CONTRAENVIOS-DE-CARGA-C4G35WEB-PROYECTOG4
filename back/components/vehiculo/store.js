const Model = require('./model');

function addVehiculo(vehiculo){
  const newVehiculo = new Model(vehiculo);
  newVehiculo.save()
}

function getVehiculos(){
  const vehiculos = Model.find();
  return vehiculos;
}

module.exports = {
  add: addVehiculo,
  list: getVehiculos,
}