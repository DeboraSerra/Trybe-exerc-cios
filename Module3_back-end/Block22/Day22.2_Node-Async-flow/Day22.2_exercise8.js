const fizzBuzz = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) return resolve('FizzBuzz');
    if (num % 3 === 0) return resolve('Fizz');
    if (num % 5 === 0) return resolve('Buzz');
    reject(num);
  });
};

const randomNum = () => Math.floor(Math.random() * 100 + 1);

fizzBuzz(randomNum())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
