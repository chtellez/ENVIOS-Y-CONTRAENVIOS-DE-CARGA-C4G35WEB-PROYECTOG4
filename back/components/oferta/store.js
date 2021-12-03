
const Model = require('./model');

function addOferta(solicitud){
  const newOferta = new Model(solicitud);
  return newOferta.save()
}

function getOfertas(){
  const ofertas = Model.find();
  return ofertas;
}

module.exports = {
  add: addOferta,
  list: getOfertas,
}
