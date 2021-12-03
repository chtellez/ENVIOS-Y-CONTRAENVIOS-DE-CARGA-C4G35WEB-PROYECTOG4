const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ofertaSchema = new Schema({
  user:{
    type: Schema.ObjectId,
    ref:"usuario"
  },
  precio:Number,
  fechaRecogida:String,
  horaRecogida:String,
  tiempoDeEntrega:Number,
  validez:Date,
  aceptada:Number,
  vehiculo:{
    type: Schema.ObjectId,
    ref:"vehiculo"
  }
});

const model = mongoose.model('oferta', ofertaSchema, 'ofertas');

module.exports = model;