const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehiculoSchema = new Schema({
placa:String,
capacidad:Number,
tipoCarga:String,
idUsuario:String,
});

const model = mongoose.model('vehiculo', vehiculoSchema, 'vehiculos');

module.exports = model;