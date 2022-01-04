// const factorial = number => {
//   let factorialNumber = 1;
//   for (let i = 2; i <= number; i += 1) {
//     factorialNumber *= i;
//   }
//   return factorialNumber;
// }

// console.log(factorial(4));

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;

console.log(factorial2(4));