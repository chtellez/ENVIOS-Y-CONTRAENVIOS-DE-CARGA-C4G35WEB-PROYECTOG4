const express = require("express");
const router = express.Router();

const indexRouter = require('./index');
const usersRouter = require('./users');
const usuarioRouter = require('./Usuario.route');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/usuario',usuarioRouter)

module.exports = router
