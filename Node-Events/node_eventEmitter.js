/*
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on("someEvent", function(msg){
    console.log(msg)
});

eventEmitter.emit("someEvent", "Event is fired");

/*

Output:

Naveen@Naveen-PC MINGW32 ~/Desktop/Learning/Projects/Node
$ node node_eventEmitter.js
Event is fired

*/

var events = require('events');
var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var sachin = new person("sachin");
var sehwag = new person("sehwag");
var dravid = new person("dravid");

var players = [sachin, sehwag, dravid];

players.forEach(function (player){
    player.on('speak', function(msg){
        console.log(`${player.name} says: ${msg}`);
    });
});

sachin.emit('speak', 'I scored 200');
sehwag.emit('speak', "i also scored more than 200")


/*
Output:
Naveen@Naveen-PC MINGW32 ~/Desktop/Learning/Projects/Node
$ node node_eventEmitter.js
sachin says: I scored 200
sehwag says: i also scored more than 200
*/



