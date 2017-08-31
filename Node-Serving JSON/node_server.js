var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("request url", req.url);
    res.writeHead(200, {'Content-Type': "application/json"});
    var obj = {
        name: "Sachin",
        age: 42
    }
    res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1' , function(){
    console.log(`server started at port: 3000`);
});


/*
Output:
:// localhost:3000
{"name":"Sachin","age":42}
*/