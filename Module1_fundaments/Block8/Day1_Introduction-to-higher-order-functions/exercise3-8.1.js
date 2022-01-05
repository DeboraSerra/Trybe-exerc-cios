const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkScore = (template, answers) => {
  let score = 0;
  for (let i = 0; i < template.length; i += 1) {
    if (answers[i] === "N.A") {
      score += 0;
    } else if (answers[i] === template[i]) {
      score += 1;
    } else {
      score -= 0.5;
    }
  }
  return score;
};

const myScore = (template, answers, func) => func(template, answers);

console.log(myScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkScore));
