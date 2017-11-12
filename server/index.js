// var fs = require('file-system');
// var server = require('http');
// var db = require('../database/database.js');
// var port = 3000;

// var myServer = server.createServer(function(request, response) {
//   if(request.method === 'POST') {
//     var statusCode = 201;
//     response.writeHead(statusCode);
//     response.end('successful POST request');
//   } else if (request.method === 'GET') {
//     var statusCode = 200;
//     response.writeHead(statusCode);
//     response.end('successful GET request');
//   }
// });

// myServer.listen(port, function() {
//   console.log('listening on port ' + port);
// });

const express = require('express');
const app  = express();

app.use(express.static('dist'));

app.get('/', (request, response) => response.send('this is a get'))

app.post('/', (request, response) => response.send('this is a post'));

app.listen(3000, () => console.log('Listening on port 3000'))