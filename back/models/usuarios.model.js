const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Password siempre de 128 para que pueda hacer el proceso de encriptacion "crypto"
const UsuarioShema = new Schema({
    usuario:{type: String, required: true, max:100},
    pass:{type: String, required: true, max:128},
});

module.exports = mongoose.model("usuarios", UsuarioShema);
