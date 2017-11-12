var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/contactList', {useMongoClient: true});

var contactSchema = mongoose.Schema({
  name: 'string',
  email: {type: 'string', unique: true}
});

var Client = mongoose.model('Client', contactSchema);

// var myself = new Client({name: 'Chucky', email: 'cpbennett4@gmail.com'});

// myself.save(function(error, myself) {
//   if(error) {
//     console.log(error);
//   }
//   console.log('DATABASE SUCCESS!')
// });

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