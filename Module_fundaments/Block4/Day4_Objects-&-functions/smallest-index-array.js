function smallestNumberIndex(numbers) {
  let smallestIndex = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[smallestIndex]) {
      smallestIndex = index
    };
  };
  return smallestIndex;
};

let listNumbers = [2, 3, 6, 7, 10, 1, 25, 30, 10];

console.log(smallestNumberIndex(listNumbers));