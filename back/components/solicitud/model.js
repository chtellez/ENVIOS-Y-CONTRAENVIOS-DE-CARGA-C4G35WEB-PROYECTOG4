const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const solicitudSchema = new Schema({
  origen:String,
  destino:String,
  largo:Number,
  ancho:Number,
  alto:Number,
  volumen:Number,
  peso:Number,
  tipo:String,
  fechaRecogida:Date,

});

const model = mongoose.model('solicitud', solicitudSchema, 'solicitudes');

module.exports = model;