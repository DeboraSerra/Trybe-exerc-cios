const romanNumber = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
}

function romanToArabic(number) {
  number = number.toLowerCase();
  let len = number.length;
  let soma = romanNumber[number[len - 1]];
  let atual = romanNumber[number[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    let prox = romanNumber[number[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(romanToArabic('MCMXLVI'));