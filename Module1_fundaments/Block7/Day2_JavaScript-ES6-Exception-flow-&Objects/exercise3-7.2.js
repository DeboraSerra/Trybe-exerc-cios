const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Exercise 1
const addShift = (obj, key, value) => obj[key] = value;

addShift(lesson2, 'turno', 'noite');

console.log(lesson2);

//Exercise 2
const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson1));

//Exercise 3
const objectLenght = (obj) => Object.keys(obj).length;

console.log(objectLenght(lesson2));

//Exercise 4
const listValues = (obj) => Object.values(obj);

console.log(listValues(lesson3));

//Exercise 5
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
}

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

//Exercise 6
const totalStudents = (obj) => {
  let numberOfStudents = 0;
  for (let key in obj) {
    for (let otherKey in obj[key]) {
      if (otherKey === 'numeroEstudantes') {
        numberOfStudents += obj[key][otherKey];
      }
    }
  }
  return numberOfStudents;
}

console.log(totalStudents(allLessons));

//Exercise 7
const getValueByNumber = (obj, num) => Object.values(obj)[num]

console.log(getValueByNumber(lesson1, 0));

//Exercise 8
const verifyPair = (obj, key, value) => obj[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));