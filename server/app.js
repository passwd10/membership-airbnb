const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
<<<<<<< HEAD

const app = express();

// view engine setup
=======
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

const app = express();

>>>>>>> create-login-signup-pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD

// catch 404 and forward to error handler
=======
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

>>>>>>> create-login-signup-pages
app.use((req, res, next) => {
  next(createError(404));
});

<<<<<<< HEAD
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
=======
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

>>>>>>> create-login-signup-pages
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
