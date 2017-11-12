const express = require('express');
const app  = express();
var bodyParser = require('body-parser');
var save = require('../database/database.js').save;

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('this is a get');
});

app.post('/', bodyParser(), (request, response) => {
  save(request.body);
  response.send('this is a post');
});

app.listen(3000, () => console.log('Listening on port 3000'));