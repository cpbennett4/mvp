var save = require('../database/database.js');
const express = require('express');
const app  = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/', bodyParser(), (request, response) => {
  save.save(request.body);
  response.send('User\'s info saved to database!');
});

app.get('/', (request, response) => {
  save.seeUsers(request, response);
});

app.use('', express.static(__dirname + '/../dist'));
app.listen(3000, () => console.log('Listening on port 3000'));