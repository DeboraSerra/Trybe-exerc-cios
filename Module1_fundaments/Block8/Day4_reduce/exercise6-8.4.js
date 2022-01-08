const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = students.map((item, i) => {
  const student = {};
  student.name = item;
  student.average = grades[i].reduce((acc, grade, x, array) => {
    const total = array.length;
    if (x === total - 1) {
      return (acc + grade) / total;
    } else {
      return acc + grade;
    }
  })
  return student;
})

console.log(studentAverage);

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];
