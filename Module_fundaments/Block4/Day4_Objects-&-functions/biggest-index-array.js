function biggestNumberIndex(numbers) {
  let biggestIndex = 0;
  for (let index in numbers) {
    if (numbers[index] > numbers[biggestIndex]) {
      biggestIndex = index
    };
  };
  return biggestIndex;
};

let listNumbers = [2, 3, 6, 7, 10, 1, 25, 30, 10];

console.log(biggestNumberIndex(listNumbers));