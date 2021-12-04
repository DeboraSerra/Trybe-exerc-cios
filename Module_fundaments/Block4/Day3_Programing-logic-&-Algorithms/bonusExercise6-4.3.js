let divisors = 1;
let number = 7;

for (let i = 2; i <= number; i += 1) {
  if (number % i === 0) {
    divisors += 1;
  }
}

if (divisors === 2) {
  console.log(number + " é primo");
} else {
  console.log(number + " não é primo");
}