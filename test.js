var express = require('express');

var app = express();

app.listen(9876);

app.get('/', function(req, res) {
	res.send("This is home");
});

