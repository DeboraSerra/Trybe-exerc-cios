const isEven = (n) => (n % 2 === 0) ? `${n} is even` : `${n} is not even`;

const isEven2 = n => `${n} is ${(n % 2 !== 0) ? 'not' : ''} even`

console.log(isEven(5));
console.log(isEven2(2));

const isEven3 = (n) => n % 2 === 0;

console.log(isEven3);