const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/27017', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('successfully connected to mongodb');
});
