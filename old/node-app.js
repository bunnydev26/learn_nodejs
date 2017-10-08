var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	if(req.url === '/' || req.url === '/home') {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/index.html');
		myReadStream.pipe(res);
	} else if(req.url === '/contact') {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/contact.html');
		myReadStream.pipe(res);		
	} else if(req.url === '/api/family') {
		var family = [{name : 'amit', age:23}, {name: 'tanishka', age:18}];
		res.writeHead(200, {'Content-Type' : 'application/json'});
		res.end(JSON.stringify(family));
	} else {
		res.writeHead(404, {'Content-Type' : 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/404.html');
		myReadStream.pipe(res);
	}
		
});

server.listen(9876, function() {
		console.log("listening at 9876");
});
