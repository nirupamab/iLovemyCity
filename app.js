var express = require('express');
var path = require('path');
//svar favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./public/routes/index');
var users = require('./public/routes/users');

var app = express();
var routes=require('./public/routes/route.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'jade');

app.use(express.static(__dirname+'/public'));
//app.set('view engine', 'ejs');
app.use("/css",express.static(__dirname + "public/css"));
app.use("/jpg",express.static(__dirname + "public/images"));


// app.get('/',function(req,res){
//   res.render('home',{
//                      headline:"Heyy Nirupama Welcome to Web technologies"
//                     });
// });
app.get('/',routes.home);
app.get('/:city',routes.city);

var port=process.env.PORT||8080;
var server=app.listen(port,function(req,res){
  console.log("Running in https://localhost:"+port);
 
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render('error');
});

module.exports = app;
