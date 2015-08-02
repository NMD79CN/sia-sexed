//server.js

//set up
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var app = express();
app.use(cors());
var Story = mongoose.model('Story', {
	text: String,
	createdAt: Date
});

//config
// mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');   
mongoose.connect('mongodb://hieusydo:05141996@ds059938.mongolab.com:59938/talkaboutit');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(callback) {
  console.log('Connected to database success !');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//routes api
app.get('/api/stories', function(req, res) {
	Story.find(function(err, stories) {
		if(err)
			res.send(err)
		res.json(stories);
	});
});

app.post('/api/stories', function(req, res) {
	Story.create({
		text: req.body.text, 
		createdAt: new Date()
	}, function(err, stories) {
		if(err)
			res.send(err)
		Story.find(function(err, stories) {
			if(err) 
				res.send(err)
			res.json(stories);
		});
	});
});



app.listen(8080);
console.log("App listening on port 8080");