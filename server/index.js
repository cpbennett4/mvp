var server = require('http');
var db = require('../database/database.js');
var port = 3000;

var myServer = server.createServer(function(request, response) {
  if(request.method === 'POST') {
    var statusCode = 201;
    response.writeHead(statusCode);
    response.end('successful POST request');
  } else if (request.method === 'GET') {
    var statusCode = 200;
    response.writeHead(statusCode);
    response.end('successful GET request');
  }
});

myServer.listen(port, function() {
  console.log('listening on port ' + port);
});