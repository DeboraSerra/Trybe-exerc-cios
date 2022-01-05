function hydrate(string) {
  let array = string.split(" ");
  let waterCups = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (parseInt(array[i]) == array[i]) {
      waterCups += parseInt(array[i]);
    }
  }
  if (waterCups > 1) {
    return `${waterCups} copos de água`;
  } else {
    return `${waterCups} copo de água`;
  }
}

module.exports = hydrate;