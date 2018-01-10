var express  = require('express');
var fs = require('fs');
var https = require('https');
var app      = express();                         
var mongoose = require('mongoose');                     
var morgan = require('morgan');             
var bodyParser = require('body-parser');   
var methodOverride = require('method-override'); 

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app).listen(8081);

mongoose.connect('mongodb://localhost/todolist');
module.exports=exports=mongoose;

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.listen(8081);
console.log("App task listen on 8081");