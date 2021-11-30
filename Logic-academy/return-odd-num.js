/*
06 - Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/

function oddNumbers(){
  let oddNum = '';
  for (let i = 1; i <= 50; i += 1){
    if (i % 2 != 0) {
      oddNum = oddNum + ', ' + i;
    }
  }
  return oddNum;
}

console.log(oddNumbers());
