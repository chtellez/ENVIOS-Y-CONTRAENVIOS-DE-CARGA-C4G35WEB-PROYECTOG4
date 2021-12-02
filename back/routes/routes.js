const express = require("express");
const router = express.Router();

const solicitudesRoutes = require('../components/solicitud/routes')
const vehiculoRoutes = require('../components/vehiculo/routes')
const ofertasRouter = require('../components/oferta/routes');
const usuarioRouter = require('../components/usuario/Usuario.route');

router.use('/usuario',usuarioRouter);
router.use('/solicitudes', solicitudesRoutes);
router.use('/vehiculo', vehiculoRoutes);
router.use('/ofertas', ofertasRouter);

module.exports = router
