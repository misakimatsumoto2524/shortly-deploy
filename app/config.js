var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is conected');
});

module.exports = db;
