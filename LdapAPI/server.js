var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
 //created model loading here
  bodyParser = require('body-parser');
  
//mongoose instance connection url connection
/* var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ldapdb');  */


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//enable access control....
//completely open cors, unless otherwise specified...
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/ldapApiRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
