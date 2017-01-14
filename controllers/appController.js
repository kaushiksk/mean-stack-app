var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app,db){

  app.get('/',function(req,res){
					res.render('home.ejs');
	       });

	app.get('/login',function(req,res){
		      res.render('login.ejs');
        });

  //register
  app.post('/register', urlencodedParser, function(req, res) {

  });

  //authenticate
  app.post('/login', urlencodedParser, function(req, res) {

  });

db.collection("Products").find({}, function(err, docs) {
  prods=[];
    docs.each(function(err, doc) {
      if(doc) {
        prods.push(doc);
      }

  });
});


  app.get('/homedata',function(req,res){
    res.json(prods);
});


}
