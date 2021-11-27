const express = require("express");
const router = express.Router();

const indexRouter = require('./index');
const usersRouter = require('./users');
const demandaRoutes = require('../components/solicitud/routes')

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/demanda', demandaRoutes);

module.exports = router
