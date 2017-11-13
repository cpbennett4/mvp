var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/contactList', {useMongoClient: true});

var contactSchema = mongoose.Schema({
  name: 'string',
  email: {type: 'string', unique: true}
});

var Client = mongoose.model('Client', contactSchema);

module.exports.save = function(object) {
  object = new Client({
    name: object.name,
    email: object.email
  });

  object.save(function(error, object) {
    if(error) {
      console.log(error);
    }
  });
}

module.exports.seeUsers = function(request, response, next) {
  Client.find({}, function(error, docs) {
    if(error) {
      response.status(500);
      response.end(error);
    } else {
      for(var i = 0; i < docs.length; i++) {
        console.log('user: ',docs[i]);
      }
      response.end(JSON.stringify(docs));
    }
  });
}

module.exports.mongoose = mongoose;