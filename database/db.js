const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3004', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const userSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  petName: {type: String, required: true},
  species: {type: String, required: true},
  petSize: {type: String, required: true},
  address: {type: Number, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;