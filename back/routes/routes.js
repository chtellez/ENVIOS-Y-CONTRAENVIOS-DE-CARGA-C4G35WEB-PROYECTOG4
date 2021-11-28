const express = require("express");
const router = express.Router();

const indexRouter = require('./index');
const usersRouter = require('./users');
const usuarioRouter = require('./Usuario.route');
const demandaRoutes = require('../components/solicitud/routes')

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/usuario',usuarioRouter);
router.use('/demanda', demandaRoutes);

module.exports = router
