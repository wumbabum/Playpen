const names = require('./names.json');
const {addresses} = require('./addresses.json'); 

let species = ['Dog', 'cat', 'bird', 'iguana'];
let petSizes = ['small', 'medium', 'large'];

let rElement = (array) => array[(Math.floor(Math.random() * array.length))];

let generateFakes = (n) => {
  let users = [];

  for (let i = 0; i < n; i++) {
    users.push(makeFake());
  }

  return users;
}

let makeFake = () => {
  user = {};

  user.userName = rElement(names.hrr50); // String
  user.petName = rElement(names.petNames);
  user.species = rElement(species);
  user.petSize = rElement(petSizes);
  let address = rElement(addresses);
  user.address = address.address1 + ' ' + address.city + ', ' + address.state + ' ' + address.postalCode;

  return user;
};

module.exports = generateFakes;