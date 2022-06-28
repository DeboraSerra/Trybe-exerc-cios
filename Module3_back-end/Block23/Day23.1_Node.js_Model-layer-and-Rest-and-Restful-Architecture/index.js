const express = require('express');
const rescue = require('express-rescue');
const { validateName, validateEmailAndPass } = require('./validations');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.listen(3005, () => console.log('Port 3005'));

app.post(
  '/user',
  rescue(validateName),
  rescue(validateEmailAndPass),
  rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  await User.createUser({ firstName, lastName, email, password });
  const user = await User.getCreatedUser();
  res.status(201).json(user);
}))

app.get('/user', rescue(async (req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
}))

app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({
    error: true,
    message: 'User not found',
  })
  res.status(200).json(user);
}))

app.put(
  '/user/:id',
  rescue(validateName),
  rescue(validateEmailAndPass),
  rescue(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const user = await User.updateUser(id, { firstName, lastName, email, password });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  })
)

app.use((err, req, res, next) => {
  res.status(500).json(err.message);
})
