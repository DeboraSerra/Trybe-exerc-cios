const allLessons = {
  lesson1: {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
  },
  lesson2: {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
    turno: "noite",
  },
  lesson3: {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
  },
};

const mathStudents = (obj) => {
  let studentCount = 0;
  for (key in obj) {
    for (otherKey in obj[key]) {
      if (obj[key][otherKey] === 'Matemática') {
        studentCount += obj[key]['numeroEstudantes'];
      }
    }
  }
  return studentCount;
}

console.log(mathStudents(allLessons));

const createReport = (obj, teacher) => {
  const report = {};
  report.teacher = teacher;
  report.classes = [];
  report.students = 0;
  for (key in obj) {
    for (otherKey in obj[key]) {
      if (obj[key][otherKey] === teacher) {
        report.classes.push(obj[key].materia);
        report.students += obj[key].numeroEstudantes;
      }
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));