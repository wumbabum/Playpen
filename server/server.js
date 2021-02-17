const express = require('express');
const path = require('path');
const axios = require('axios');
var distance = require('google-distance-matrix');
const bodyParser = require('body-parser');
const db = require('../database/tools.js')
const app = express();
const port = 5000;
const sample = require('./data/sample.json');

//Setup for Google's Distance Matrix API
distance.key(require('../env/config.js'));
distance.mode('walking');

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Serving ${req.method} request at ${req.url}`);
  next();
})

app.get('/api/nearby/:location', (req, res) => {
  let origin = [req.params.location];
  let people = sample; //This would be a real database connection query
  let maxPlaces = 5;
  distance.departure_time(Date.now());
  
  //distance.matrix accepts an array of origins, array of destinations, and a callback
  distance.matrix(origin, people.map(person => person.location), function (err, distances) {
      if (err) {
        res.status(400).send('Could not obtain data for that address.')
      } else {
        res.status(200).send(db.nearby(people, distances, maxPlaces));
      }
  });
})

app.get('/api/dogs', (req, res) => {
  res.send('api for dogs work in progress');
});

app.listen(port, () => {
  console.log(`Playpen listening on port ${port}.`);
});