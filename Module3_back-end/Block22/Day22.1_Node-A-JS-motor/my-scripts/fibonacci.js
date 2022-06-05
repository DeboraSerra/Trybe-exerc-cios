const { questionInt } = require('readline-sync');

const getSequence = () => {
  const fibonacci = (num) => {
    const sequence = [0, 1];
    for (let index = 0; index < num; index += 1) {
      if (sequence.length === num) return sequence;
      else {
        const last = sequence[sequence.length - 1];
        const secLast = sequence[sequence.length - 2];
        const newNum = last + secLast;
        sequence.push(newNum);
      }
    }
    return sequence;
  }
  const number = questionInt('Pick a number: ');
  if (number > 0) return console.log(fibonacci(number));
  else return console.log('Invalid number!');
}

getSequence();

module.exports = getSequence;
