var express = require('express');
var appController = require('./controllers/appController');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

MongoClient.connect("mongodb://user:user@ds139288.mlab.com:39288/product_database", function(err, db){

  //error handling - this one is temperory
  if(err) throw err;

  appController(app,db);

});

app.listen(5550);
console.log('App listening on port 5550');
