const findTheOldest = function (people) {
  people.map((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });
  const oldest = people.reduce((oldest, currentPerson) => {
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    return oldestAge < currentAge ? currentPerson : oldest;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
