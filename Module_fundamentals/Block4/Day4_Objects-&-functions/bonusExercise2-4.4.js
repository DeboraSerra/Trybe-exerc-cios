let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function evenNumbers(vector) {
  let even = [];
  for (let i = 0; i < vector.length; i += 1) {
    for (let x = 0; x < vector[i].length; x += 1){
      if (vector[i][x] % 2 === 0) {
        even.push(vector[i][x]);
      }
    }
  }
  return even;
}

console.log(evenNumbers(vector));