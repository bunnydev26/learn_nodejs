var fs = require('fs');

var myReadStream = fs.createReadStream('test.txt', 'utf8');
var myWriteStream = fs.createWriteStream('test_temp.txt');

myReadStream.on('data', function(chunk) {
	console.log("Received a chunk and wrote it");
	myWriteStream.write(chunk);
});
