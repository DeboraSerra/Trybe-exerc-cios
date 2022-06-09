const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const app = express();
app.use(bodyParser.json());
app.listen(3000, () => console.log('Hearing on port 3000'));

const randomToken = () => {
  return crypto.randomBytes(8).toString('hex');
}

// exercise 1
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
})

// exercise 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}`});
})

// exercise 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) return res.status(200).json({ message: `Hello, ${name}`});
  res.status(401).json({ message: 'Unauthorized' });
})

// exercise 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Your name is ${name} and you are ${age} years old` });
})

// exercise 5
const getSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const response = JSON.parse(simpsons)
  return response;
}

// exercise 6
app.get('/simpsons', async (req, res) => {
  const response = await getSimpsons();
  if (!response) return res.status(500).json({ message: 'Internal Server Error' });
  res.status(200).json(response);
})

// exercise 7
app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const response = await getSimpsons();
  const simpson = response.find((item) => item.id === id);
  if (!simpson) return res.status(404).json({ message: 'Character not found'});
  res.status(200).json(simpson);
})

//exercise 8
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const response = await getSimpsons();
  if (response.some((item) => item.id === id)) {
    return res.status(409).json({ message: 'id already exists' });
  }
  response.push({ id, name });
  fs.writeFile('./simpsons.json', JSON.stringify(response));
  res.status(204).end();
})

// Bonus
// exercise 1
app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });
  res.status(200).json({ message: 'Valid token!' });
})

// exercise 2
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing field' });
  }
  res.status(200).json({ token: randomToken() });
})
