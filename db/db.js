const mongoose = require('mongoose');
const config = require('./config.json');

console.log('config.mongodb_url', config.mongodb_url);

mongoose.connect(config.mongodb_url, { useNewUrlParser: true, useFindAndModify: false });

let db;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  // we're connected!
  db = mongoose.connection;
  console.log('Connected to MongoDB');
});

module.exports = {
  db
};