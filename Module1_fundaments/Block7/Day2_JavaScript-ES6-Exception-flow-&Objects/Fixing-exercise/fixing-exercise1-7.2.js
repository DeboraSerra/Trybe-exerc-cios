const newKey = (obj, key, keyValue) => {
  obj[key] = keyValue;
  return obj;
}

const myObject = {
  name: 'Débora',
  lastName: 'Serra'
}

const anotherKey = 'age';

const anotherrKeyValue = 28;

console.log(newKey(myObject, anotherKey, anotherrKeyValue));
