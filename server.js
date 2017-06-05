var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// ?
mongoose.Promise = global.Promise;

// App initialization
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var path = require('path');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose');
require('./server/config/routes')(app);

 app.listen(9000, function(){
   console.log("listening on 9000");
 });
