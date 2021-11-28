const {Router}= require('express')
const router = Router()
const usuarioCtrl= require('../controllers/UsuarioController')

router.post('/crear',usuarioCtrl.crearUsuario)
router.post('/login',usuarioCtrl.login)



module.exports = router