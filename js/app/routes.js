var userSchema = new mongoose.Schema({
         active: Boolean,
         email: { type: String, trim: true, lowercase: true },
         name: { type: String, trim: true },
         created: { type: Date, default: Date.now },
         lastLogin: { type: Date, default: Date.now },
     },
     { collection: 'user' }
);


userSchema.index({email : 1}, {unique:true});

var UserModel = mongoose.model( 'User', userSchema );

var eventSchema = new mongoose.Schema({
         title: { type: String, trim:true },
         kind: { type: String, trim:true },
         url: { type: String, trim:true },
         imageUrl: { type: String, trim:true },
         description: { type: String, trim:true },
         address:{ type: String, trim:true },
         state: { type: String, trim:true, lowercase:true, default: 'new' },
         createdDate: { type: Date, default: Date.now },
         modifiedDate: { type: Date, default: Date.now },
         beginDate: { type: Date, default: Date.now },
         endDate: { type: Date, default: Date.now },
         postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
         },
        
     },
     { collection: 'event' }
);


 
var EventModel = mongoose.model( 'Event', feedSchema );


exports.addAPIRouter = function(app, mongoose, stormpath) {
 
 	app.get('/*', function(req, res, next) {
 		res.contentType('application/json');
 		next();
 	});
 	app.post('/*', function(req, res, next) {
 		res.contentType('application/json');
 		next();
 	});
 	app.put('/*', function(req, res, next) {
 		res.contentType('application/json');
 		next();
 	});
 	app.delete('/*', function(req, res, next) {
 		res.contentType('application/json');
 		next();
 	});
}

var router = express.Router();
 	
 	router.post('/user/enroll', function(req, res) {
 		logger.debug('Router for /user/enroll');

        var kitty = new UserModel({ name: req.body.username});
        kitty.save(function (err) {
        if (err) // ...
            console.log('meow');
        });

 	}
 	router.get('/events', stormpath.apiAuthenticationRequired, function(req, res) {
 		logger.debug('Router for /events');
        EventModel.find({}, function (err, users) {
            res.send(users);
        });
 	}
 	router.put('/feeds/subscribe', 
 			  stormpath.apiAuthenticationRequired, function(req, res) {
 		logger.debug('Router for /feeds');
 	}
  	app.use('/api/v1.0', router);
}