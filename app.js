var express = require('express');

var app = express();

app.set('view engine', 'ejs');


app.listen(9876, function() {
	console.log("Listening at port 9876");
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/contact', function(req, res) {
	res.sendFile(__dirname + "/contact.html");
});

app.get('/profile/:name', function(req, res) {
	var data = {age: 17, job: 'Architect'};
	res.render('profile', {person: req.params.name, data: data});
});
