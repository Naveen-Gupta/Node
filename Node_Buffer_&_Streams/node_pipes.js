var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/sample.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt', 'utf8');
myReadStream.pipe(myWriteStream);