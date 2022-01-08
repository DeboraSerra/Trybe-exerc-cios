let limit = 50;
let divisors = 1;
let prime = [];

for (let i = 2; i <= limit; i += 1){
  for (let x = 2; x <= i; x += 1){
    if (i % x === 0) {
      divisors += 1;
    }
  }
  if (divisors === 2) {
    prime.push(i);
  }
  divisors = 1;
}

let biggestPrime = prime[0];

for (let i = 0; i < prime.length; i += 1){
  if (prime[i] > biggestPrime) {
    biggestPrime = prime[i];
  }
}

console.log(prime);
console.log(biggestPrime);