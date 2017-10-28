var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get("/", function(req, res) {
	res.render('index');
});

app.post("/contact", function(req, res) {
	console.log(req.body);
	res.render('contact-success', {data: req.body});
});

app.get("/contact", function(req, res) {
	res.render('contact');
});

app.get("/profile/", function(req, res) {
	//console.log(req.query);
	var data = {person: req.query.name, age: 17, job: 'Architect', hobbies: ['Sketching', 'Listening to Music', 'Talking to baby']}
	res.render('profile', data);
});

app.listen(9876, function() {
	console.log('Listening at 9876');
});
