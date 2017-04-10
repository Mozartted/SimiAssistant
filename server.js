require('dotenv').load();
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./server/routes/routes')

var scheduler = require('./scheduler');

var app = express();

// view engine setup
// Force HTTPS on heroku
if(process.env.NODE_ENV === 'production') {
  app.enable("trust proxy");
  app.use (function (req, res, next) {
      if(req.secure) {
        //request was via https, so do no special handling
        next();
      } else {
        //request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
      }
  });
}

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true})); //use bodyParser for request and parsing info
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public')); //use to serve static files like favicon, css, angular and the rest

app.locals.moment = require('moment');

route(app);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




scheduler.start();

module.exports = app;
