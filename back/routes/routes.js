const express = require("express");
const router = express.Router();

const indexRouter = require('./index');
const usersRouter = require('./users');
<<<<<<< HEAD
const solicitudesRoutes = require('../components/solicitud/routes')

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/solicitudes', solicitudesRoutes);
=======

const demandaRoutes  = require('../components/solicitud/routes')
const vehiculoRoutes = require('../components/vehiculo/routes')
const usuarioRouter = require('./Usuario.route');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/usuario',usuarioRouter);
router.use('/demanda', demandaRoutes);
router.use('/vehiculo', vehiculoRoutes);
>>>>>>> main

module.exports = router
