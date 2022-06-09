const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
]

app.listen(3005, () => console.log('Aplicação escutando na porta 3001'));

app.get('/drinks', (req, res) => {
  res.json(drinks);
})

app.get('/drinks/sort', (req, res) => {
  res.json(drinks.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }));
})

app.get('/drinks/search', (req, res) => {
  const { name, minPrice } = req.query;
  let drink;
  drink = drinks
      .filter((item) => item.price >= Number(minPrice || 0))
      .filter((item) => item.name.includes(name));
  res.status(200).json(drink);
})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find(({ id: dId }) => dId === Number(id));
  if (!drink) return res.status(404).send('Drink not found');
  res.json(drink);
})

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink added successfully '});
})

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = drinks.findIndex((r) => r.id === Number(id));
  if (index === -1) return res.status(404).json({  message: 'Drink not found' });
  drinks[index] = { ...drinks[index], name, price };
  res.status(204).end();
})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const index = drinks.findIndex((r) => r.id === Number(id));
  if (index === -1) return res.status(404).json({ message: 'Drink not found' });
  drinks.splice(index, 1);
  res.status(204).end();
})
