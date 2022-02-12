const { species } = require('../data/zoo_data');

const getAnimalName = (residents, sex, sorted) => {
  let animalNames = residents.map(({ name }) => name);
  if (sex) {
    animalNames = residents
      .filter((resident) => resident.sex === sex)
      .map(({ name }) => name);
  }
  if (sorted) animalNames.sort();
  return animalNames;
};

const getAnimalMap = (options) => {
  const { includeNames, sex, sorted } = options || false;
  const obj = {};
  species.forEach(({ location }) => { obj[location] = []; });
  let animalName;
  if (includeNames) {
    species.forEach(({ name, location, residents }) => {
      animalName = { [name]: getAnimalName(residents, sex, sorted) };
      obj[location].push(animalName);
    });
  } else species.forEach(({ name, location }) => obj[location].push(name));
  return obj;
};

module.exports = getAnimalMap;
