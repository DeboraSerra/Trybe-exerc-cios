const evenSum = (arr) => arr.reduce((acc, item) => item % 2 === 0 ? acc + item : acc, 0);

const array = [0, 1, 2, 3, 4, 5, 6];
const array2 = [];
const array3 = [1, 3, 5, 7];

console.log(evenSum(array));
console.log(evenSum(array2));
console.log(evenSum(array3));
