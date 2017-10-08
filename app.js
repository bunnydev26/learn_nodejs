var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.listen(9876, function() {
	console.log("Listening at port 9876");
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/contact', function(req, res) {
	res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res) {
	var data = {age: 17, job: 'Architect', hobbies: ["Eating Pizza", "Sketching", "Listening to Music", "Listening to Baby"]};
	res.render('profile', {person: req.params.name, data: data});
});

