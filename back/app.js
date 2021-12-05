require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyparser = require ('body-parser')
const logger = require('morgan');
// var auth = require("./auth/main_auth")

//Immportamos la configuracion de la base de datos
const database = require("./config/database");
// require("./config/database");
const app = express();

app.use(cors());
// app.use(auth)
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes/routes'))

app.use('/usuario',require('./components/usuario/Usuario.route'))


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

//Mongo connection
database.mongoConnect();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/site/'));
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/site/index.html');
  });
}

module.exports = app;
