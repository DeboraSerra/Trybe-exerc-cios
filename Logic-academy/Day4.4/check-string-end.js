// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
// verificaFimPalavra(‘trybe’, ‘be’);
// Retorno esperado: true
// verificaFimPalavra(‘joaofernando’, ‘fernan’);
// Retorno esperado: false;
// Dica: Use o SPLIT.

function stringAndEnd(word, end) {
  let isTheSame = false;
  let wordBackwards = word.split('').reverse().join('');
  let endBackwards = end.split('').reverse().join('');
  for (let i = 0; i < end.length; i += 1){
    if (wordBackwards[i] == endBackwards[i]) {
      isTheSame = true;
    } else {
      isTheSame = false;
    }
  }
  return isTheSame;
}

console.log(stringAndEnd('trybe', 'be'));
console.log(stringAndEnd("fernando", "fern"));
console.log(stringAndEnd("fernando", "endo"));