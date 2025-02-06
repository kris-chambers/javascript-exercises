const findTheOldest = function(people) {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    let age = Number(people[i].yearOfDeath) - Number(people[i].yearOfBirth)
  }
};

// Do not edit below this line
module.exports = findTheOldest;
