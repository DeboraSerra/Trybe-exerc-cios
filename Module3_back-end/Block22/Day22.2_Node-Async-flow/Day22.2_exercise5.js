const fs = require('fs').promises;
const phrase = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

Promise.all([
  ...phrase.map((item, index) => (
    fs.writeFile(`file${index + 1}.txt`, item)
  )),
  ...phrase.map((_item, index) => (
    fs.readFile(`file${index + 1}.txt`, 'utf-8')
  ))
])
  .then(async (response) => {
    const result = [];
    response.forEach((item) => { if (item) result.push(item); });
    await fs.writeFile('fileAll.txt', result.join(' '));
    fs.readFile('fileAll.txt', 'utf-8')
      .then((answer) => console.log(answer));
  })
  .catch((err) => console.log(err.message));
