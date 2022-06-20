const checkNumbers = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number'
      || typeof num2 !== 'number'
      || typeof num3 !== 'number'
    ) return reject(new Error('Pick only numbers'));
    const result = (num1 + num2) * num3;
    if (result < 50) return reject(new Error('Value too small'));
    return resolve(result);
  })
}

const randomNum = () => Math.floor(Math.random() * 100 + 1);

checkNumbers(randomNum(), randomNum(), randomNum())
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));

module.exports = checkNumbers;
