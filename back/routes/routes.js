const express = require("express");
const router = express.Router();

const indexRouter = require('./index');
const usersRouter = require('./users');
<<<<<<< HEAD
const usuarioRouter = require('./Usuario.route');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/usuario',usuarioRouter)
=======
const demandaRoutes = require('../components/solicitud/routes')

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/demanda', demandaRoutes);
>>>>>>> 92dd9025ccf11582032e1062a8363ab2c76fdd48

module.exports = router
