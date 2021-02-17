let nearby = (people, distances, maxPeople) => {
  //Add distances to each person
  for (let i = 0; i < people.length; i++) {
    people[i].distance = distances[i];
  }

  //Sort by distance
  let result = people.sort((a, b) => {
    return a.distance - b.distance;
  })

  //Send back maxPeople # of people
  return people.slice(maxPeople);
}

module.exports = {
  nearby: nearby
}