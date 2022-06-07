const fs = require('fs').promises;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const main = () => {
  return new Promise((resolve, reject) => {
    rl.question('What file to you want to read? ', async (answer) => {
      try {
        const response = await fs.readFile(answer, 'utf-8')
        rl.close();
        return resolve(response);
      } catch (err) {
        rl.close();
        return reject(new Error('File not found'));
      }
    })
  })
}

main()
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));
