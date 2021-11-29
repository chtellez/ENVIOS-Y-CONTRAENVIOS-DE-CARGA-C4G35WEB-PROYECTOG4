const Model = require('./model');

function addVehiculo(vehiculo){
  const newVehiculo = new Model(vehiculo);
  newVehiculo.save()
}

function getVehiculos(){
  const vehiculos = Model.find();
  return vehiculos;
}

function deleteVehiculo(idVehiculo){
  Model.findByIdAndDelete(idVehiculo,(error,deletedRecord) => {});
}

module.exports = {
  add: addVehiculo,
  list: getVehiculos,
  del: deleteVehiculo,
}