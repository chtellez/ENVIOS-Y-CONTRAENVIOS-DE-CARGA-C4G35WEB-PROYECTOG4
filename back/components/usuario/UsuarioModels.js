const mongoose = require('mongoose')
const {Schema}= mongoose

const UsuarioSchema = new Schema({
// id:String,
nombre:String,
apellido:String,
cedula: Number,
telefono: Number,
correo:String,
username:String,
contrasena: String,
transportista: Boolean
// date:{type:Date,default:Date.now}
//Convertir modelo


})

module.exports= mongoose.model('usuario',UsuarioSchema)