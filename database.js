//Database configuration
const mongoose = require('mongoose');

const dbPath = 'mongodb://root:bdatos1@ds233268.mlab.com:33268/seventest';

function connect() {
  mongoose.connect(dbPath, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.on('error', () => {
    console.log('> error occurred from the database');
  });
  db.once('open', () => {
    console.log('> successfully opened the database');
  });

  return db;
}

function close() {
  return mongoose.connection.close(function() {
    console.log(
      'Mongoose default connection is disconnected through app termination'
    );
  });
}

module.exports = { connect, close };
