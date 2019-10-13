const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const database = require('./database');
const server = express();

async function start() {
  await database.connect();

  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());
  server.use(logger('dev'));

  server.use('/github_users', usersRouter);

  // catch 404 and forward to error handler
  server.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  server.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  });

  // Closing connection on process termination
  process.on('SIGINT', database.close).on('SIGTERM', database.close);

  return server;
}

function stop() {
  return server.close();
}

module.exports = { start, stop };
