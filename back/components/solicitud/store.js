
const Model = require('./model');

function addSolicitud(solicitud){
  const newSolicitud = new Model(solicitud);
  newSolicitud.save()
}

function getSolicitudes(){
  const solicitudes = Model.find();
  return solicitudes;
}

module.exports = {
  add: addSolicitud,
  list: getSolicitudes,
}

