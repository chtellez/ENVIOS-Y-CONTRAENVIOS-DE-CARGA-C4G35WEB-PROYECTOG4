const express = require("express");
const router = express.Router();
const app = express();

const indexRouter = require('./index');
const usersRouter = require('./users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = router
