var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var tanishka = new Person('Tanishka');
var amit = new Person('Amit');
var bunny = new Person('Bunny');

var person_list = [tanishka, amit, bunny];

person_list.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(this.name + ": " + msg);
  });
});

amit.emit('speak', 'I love you tanishka!');
tanishka.emit('speak', 'I love you too!');
bunny.emit('speak', 'YAyayayyayaya I am lucky! :D');
