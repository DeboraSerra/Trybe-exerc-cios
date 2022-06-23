require('dotenv').config();
const express = require('express');
const rescue = require('express-rescue');
const pingRoute = require('./routes/ping');
const cepRoute = require('./routes/cep');

const app = express();
app.use(express.json());

app.use('/ping', pingRoute);
app.use('/cep', cepRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Port ${PORT}`));

app.use((err, req, res, next) => {
  res.status(500).json(err.message);
})
