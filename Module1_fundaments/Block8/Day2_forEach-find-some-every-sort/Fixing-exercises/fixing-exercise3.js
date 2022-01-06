//Exercise 1
const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  return arr.some((item) => item === name )
};

console.log(hasName(names, "Ana"));

//Exercise 2
const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

const peoplesAge = [];
const ageArray = people.forEach((item) => peoplesAge.push(item.age));

const verifyAges = (arr, minimumAge) => {
  // return Object.values(arr.age).every((age) => age >= 18)
  return arr.every((item) => item >= minimumAge);
};

console.log(verifyAges(peoplesAge, 18));