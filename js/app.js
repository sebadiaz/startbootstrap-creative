var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require("./app/routes");
var db	 = require('./config/db');

 
var app = express();

var userModel = mongoose.model('User');
var eventModel = mongoose.model('Event');
 var port = 8000;
 mongoose.connect(db.url);
 
app.use(bodyParser.urlencoded({ extended: true }));
 
routes.addAPIRouter(app, mongoose);

var router = express.Router();
 	
 	router.post('/user/enroll', function(req, res) {


        var kitty = new UserModel({ name: req.body.username});
        kitty.save(function (err) {
        if (err) // ...
            console.log('meow');
        });

 	});
 	router.get('/events',  function(req, res) {
 		
        eventModel.find({}, function (err, users) {
            res.send(users);
        });
 	});
 	router.put('/feeds/subscribe',  function(req, res) {
 		
 	});

app.use('/api/v1.0', router);
app.use(function(req, res, next){
   res.status(404);
   res.json({ error: 'Invalid URL' });
});

app.listen(port);
console.log('Magic happens on port ' + port);
 
exports = module.exports = app;