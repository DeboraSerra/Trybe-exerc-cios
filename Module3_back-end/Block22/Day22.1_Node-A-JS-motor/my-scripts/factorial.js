const { questionInt } = require('readline-sync');

const getFactorial = () => {
  const factorial = (num) => num > 1 ? num * factorial(num - 1) : 1;

  const number = questionInt('Choose a number: ');

  console.log(`The factorial of ${number} is ${factorial(number)}`);
}

getFactorial();

module.export = getFactorial;
