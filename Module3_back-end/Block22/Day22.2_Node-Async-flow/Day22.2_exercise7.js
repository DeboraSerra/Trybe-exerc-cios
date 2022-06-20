const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      console.log(answer)
      resolve(answer)
    })
  })
}

const main = async () => {
  const fileToRead = await question('What file do you want to change? ');
  const response = await fs.readFile(fileToRead, 'utf-8')
    .catch((err) => {
      console.log(err.message);
      return false;
    })
  if (!response) return;
  const oldWord = await question('What word do you want to change? ');
  const newWord = await question('What will be the new word? ');

  const newFile = response.replace(new RegExp(oldWord, 'g'), newWord);

  console.log({ newFile });
  const fileToChange = await question('What is the destination file? ');

  await fs.writeFile(fileToChange, newFile);
}

main()
  .catch((err) => console.log(err.message));
