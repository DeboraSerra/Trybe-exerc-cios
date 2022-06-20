const checkNumbers = require('./Day22.2_exercise1-2');

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const main = async () => {
  const result = await checkNumbers(randomNum(), randomNum(), randomNum());
  console.log(result);
}

main();
