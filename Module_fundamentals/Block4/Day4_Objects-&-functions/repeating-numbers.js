// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function repeatingNumber(numbers) {
  let reps = {};
  
  for (let value of numbers) {
    if (!reps[value]) { //!reps[value] is the same as reps[value] === undefined
      reps[value] = 1;
    } else {
      reps[value] += 1;
    }
  }

  let repeated = 0;
  let num = 0;
  for (let key in reps) {
    if (repeated < reps[key]) {
      repeated = reps[key];
      num = key;
    }
  }
  return num;
}
console.log(repeatingNumber([2, 3, 2, 5, 8, 2, 3, 5, 3, 10, 3, 7, 3]))