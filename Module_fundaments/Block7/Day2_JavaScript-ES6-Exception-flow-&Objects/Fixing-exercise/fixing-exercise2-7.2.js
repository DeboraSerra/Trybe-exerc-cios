const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const mySkills = (obj) => {
  const myKeys = Object.keys(obj);
  let myAnswer = [];
  for (let i = 0; i < myKeys.length; i += 1) {
    for (let key in obj) {
      if (key === myKeys[i]) {
        myAnswer.push(`${myKeys[i]}, Level: ${obj[key]}`)
      }
    }
  }
  return myAnswer.join(';');
}

console.log(mySkills(student1));
console.log(mySkills(student2));

// const listOfSkills = (obj) => {
//   const mySkills = Object.keys(obj);
//   for (let i in mySkills) {
//     console.log(`${mySkills[i]}, Level: ${obj[mySkills[i]]}`);
//   }
// }

// console.log('Student 1');
// listOfSkills(student1);

// console.log('Student 2');
// listOfSkills(student2);