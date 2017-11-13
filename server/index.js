var save = require('../database/database.js').save;
const express = require('express');
const app  = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/', bodyParser(), (request, response) => {
  console.log('the other test should work');
  save(request.body);
  var headers = {
    'Content-type': 'text/html'
  }
  response.writeHead(201, headers);
  response.end('User\'s info saved to database!');
});

app.get('/', (request, response) => {
  console.log('this test will not work');
  var headers = {
    'Content-type': 'application/json'
  }
  // response.writeHead(201, headers);
  response.send('hello world');
});

app.use('', express.static(__dirname + '/../dist'));
app.listen(3000, () => console.log('Listening on port 3000'));