function techList(array, name) {
  const orderedArray = array.sort();
  let newArray = [];
  for (let i = 0; i < orderedArray.length; i += 1) {
    let obj = {};
    obj["tech"] = orderedArray[i];
    obj["name"] = name;
    newArray.push(obj);
  }
  if (newArray.length === 0) {
    return "Vazio!";
  } else {
    return newArray;
  }
}

module.exports = techList;
