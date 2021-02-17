const mongoose = require('mongoose');
const db = require('../db.js');
let generateFakes  = require('./generator.js');
const amount = 100000;

db.User.deleteMany({}, () => {
  console.log('Emptied Items successful');
})
  .catch( err => {
    console.log('Error deleting items: ' + err);
  })
  .then( () => {
    return Promise.all(
      generateFakes(amount).map( userProps => {
        let user = new db.User(userProps);
        return user.save()
      })
    );
  })
  .then( () => {
    console.log(`Mongo Database seed successful`);
    return mongoose.disconnect()
  })
  .catch( err => {
    console.log('Error generating data: ' + err);
  });