const { questionFloat } = require('readline-sync');

const calcImc = () => {
  const imc = (weight, height) => (weight / (height ** 2)).toFixed(2);

  const wei = questionFloat('What is your weight (in kg)? ');
  const hei = questionFloat('What is your height (in meters)? ')

  const result = imc(wei, hei);

  if (result < 18.5) console.log(result, ' -> Below weight');
  if (result >= 18.5 && result <= 24.9) console.log(result, ' -> Normal weight');
  if (result >= 25 && result <= 29.9) console.log(result, ' -> Overweight');
  if (result >= 30 && result <= 34.9) console.log(result, ' -> First degree obesity');
  if (result >= 35 && result <= 39.9) console.log(result, ' -> Second degree obesity');
  if (result >= 40) console.log(result, ' -> Third and fourth degree obesity');
}

calcImc();

module.exports = calcImc;
