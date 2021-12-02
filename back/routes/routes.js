const express = require("express");
const router = express.Router();

const solicitudesRoutes = require('../components/solicitud/routes')
const vehiculoRoutes = require('../components/vehiculo/routes')
const usuarioRouter = require('./Usuario.route');

router.use('/usuario',usuarioRouter);
router.use('/solicitudes', solicitudesRoutes);
router.use('/vehiculo', vehiculoRoutes);

module.exports = router
