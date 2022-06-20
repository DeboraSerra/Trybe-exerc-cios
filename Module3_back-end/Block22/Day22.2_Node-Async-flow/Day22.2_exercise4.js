const fs = require('fs').promises;

const readCharacters = async (file) => {
  const result = await fs.readFile(file, 'utf8')
  return result;
}

const findCharacter = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf8')
      .then((response) => {
        const data = JSON.parse(response);
        if (!data.some((item) => parseFloat(item.id) === id)) reject(new Error('Id not found'));
        resolve(data.find((item) => parseFloat(item.id) === id));
      })
      .catch((err) => reject(new Error(err.message)));
  })
}

// findCharacter(2)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err.message));


const changeCharacter = () => {
  return new Promise(async (resolve, reject) => {
    let data = await fs.readFile('./simpsons.json', 'utf8');
    data = JSON.parse(data);
    const newData = data.filter(({ id }) => id !== '10' && id !== '6');
    const result = await fs.writeFile('./simpsons.json', JSON.stringify(newData));
    resolve('File changed')
  })
}

// changeCharacter()
//   .then((response) =>{
//     console.log(response);
//     readCharacters('./simpsons.json')
//       .then((response) => console.log(response))
//   })
//   .catch((err) => console.log(err.message));

const newFile = () => {
  return new Promise(async (resolve, reject) => {
    let characters = await readCharacters('./simpsons.json');
    characters = JSON.parse(characters);
    let family = characters.filter(({ id }) => id === '1' || id === '2' || id === '3' || id === '4');
    fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
    resolve('File created')
  })
}

// newFile()
//   .then((response) => {
//     console.log(response);
//     readCharacters('./simpsonFamily.json')
//       .then((result) => console.log(result))
//       .catch((err) => console.log(err.message))
//   })
//   .catch((err) => console.log(err.message));

const addFamily = () => {
  return new Promise(async (resolve, reject) => {
    let family = await readCharacters('./simpsonFamily.json');
    family = JSON.parse(family);
    let characters = await readCharacters('./simpsons.json');
    characters = JSON.parse(characters);
    characters = characters.find(({ name }) => name === 'Nelson Muntz');
    family.push(characters);
    fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
    resolve('File changed')
  })
}

// addFamily()
//   .then((response) => {
//     console.log(response);
//     readCharacters('./simpsonFamily.json')
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err.message));
//   })
//   .catch((err) => console.log(err.message));

const changeFamily = () => {
  return new Promise(async (resolve, reject) => {
    let family = await readCharacters('./simpsonFamily.json');
    family = JSON.parse(family);
    let characters = await readCharacters('./simpsons.json');
    characters = JSON.parse(characters);
    characters = characters.find(({ name }) => name === 'Maggie Simpson');
    const newFamily = [];
    family.forEach((item) => item.name === 'Nelson Muntz'
      ? newFamily.push(characters) : newFamily.push(item));
    fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
    resolve('File changed')
  })
}

// changeFamily()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err.message));

readCharacters('./simpsonFamily.json')
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));
