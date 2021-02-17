let nearby = (people, distances, maxPeople) => {
  //Add distances to each person
  let matches = people.map((person, i) => {
    return {
      name: person.name,
      distance: distances.rows[0].elements[i].distance.value,
      time: distances.rows[0].elements[i].duration.text
    }
  });

  //Sort by distance
  matches.sort((a, b) => {
    return a.distance - b.distance;
  })

  //Send back maxPeople # of people
  return matches.slice(0, maxPeople);
}

module.exports = {
  nearby: nearby
}