var fs = require('fs');
/*
//Syncronos reading of the file
var file_data = fs.readFileSync('temp.txt', 'utf8');
fs.writeFileSync('temp_2.txt', file_data, 'utf8');
*/


fs.readFile('temp.txt', 'utf8', function(err, data) {
  // console.log(data);
  fs.writeFile('temp_2.txt', data, function(err) {
    
  });
});
console.log('-------------Hello-------------');
