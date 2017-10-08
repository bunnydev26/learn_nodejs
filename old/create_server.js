var http = require('http');

var server = http.createServer(function(req, res) {
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hey hello world');
});

server.listen(9876, '127.0.0.1');
console.log('Listening at port 3000');
