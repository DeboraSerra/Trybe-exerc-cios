// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }

function oddAndEvenNumbers(array) {
  let numbers = {
    even: 0,
    odd: 0,
  };
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 2 === 0) {
      numbers.even += 1;
    } else {
      numbers.odd += 1;
    }
  }
  return numbers;
}

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(oddAndEvenNumbers(arrayOfNumbers))