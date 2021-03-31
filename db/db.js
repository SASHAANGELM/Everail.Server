const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect(config.mongodb_url, { useNewUrlParser: true, useFindAndModify: false });

let ready = false;
let db;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  // we're connected!
  db = mongoose.connection;
  ready = true;
  console.log('Connected to MongoDB');
});

async function getDB() {
  return new Promise(resolve => {
    if (ready) {
      return db;
    } else {
      const interval = setInterval(() => {
        if (ready) {
          resolve(db);
          clearInterval(interval);
        }
      }, 50);
    }
  });
}

module.exports = {
  db,
  getDB
};

