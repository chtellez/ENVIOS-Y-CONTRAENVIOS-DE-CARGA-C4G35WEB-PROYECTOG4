const UsuariosCtrl= {}
const Usuario = require('../models/UsuarioModels')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')

UsuariosCtrl.crearUsuario=async(req,res)=>{
  
    const{nombre,apellido,cedula,telefono,correo,username,contrasena,transportista}= req.body
    
    const NuevoUsuario = new Usuario({
        nombre,
        apellido,
        cedula,
        telefono,
        correo,
        username,
        contrasena,
        transportista,
    })
 const correoUsuario = await Usuario.findOne({correo:correo})
 if(correoUsuario)
 {
     res.json({
         mensaje: 'El correo ya existe'
     })
 }

 else {

    NuevoUsuario.contrasena = await bcrypt.hash(contrasena,10)
    const token = jwt.sign({_id:NuevoUsuario._id},"Secreto")
    await NuevoUsuario.save()

    res.json({
        mensaje: 'Bienvenido',
        id: NuevoUsuario._id,
        username: NuevoUsuario.username,
        transportista: NuevoUsuario.transportista,
        token
    })

  
 }

}

UsuariosCtrl.login= async(req,res)=>{

    const {correo,contrasena}= req.body
    const usuario = await Usuario.findOne({correo:correo})
    if(!usuario){
        return res.json({
            mensaje: 'Correo incorrecto'
        })

    }

    const match = await bcrypt.compare(contrasena,usuario.contrasena)
    if(match){

        const token = jwt.sign({_id: usuario._id},'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id:usuario.id,
            nombre: usuario.nombre,
            transportista: usuario.transportista,
            token
        })

    }

    else {

        res.json({
            mensaje: 'Contraseña incorrecta'
        })


    }




}

module.exports= UsuariosCtrl