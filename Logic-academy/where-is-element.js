/*
07 - Onde está o elemento?
Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.
Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------
*/

function findIndexOf(array, number){
  let index;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == number) {
      index = i;
    }
  }
  if (!index) {
    return "Elemento não encontrado no array."
  } else {
    return index;
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findIndexOf(numbers, 5))
