var http = require('http');

var server = http.createServer(function(req, res){
    console.log("request url", req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("response end");
});

server.listen(3000, '127.0.0.1' , function(){
    console.log(`server started at port: 3000`);
});
