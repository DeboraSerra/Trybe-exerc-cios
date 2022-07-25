require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const validateJWT = require('./middlewares/validateJWT');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/login', controllers.user.logUser);
app.post('/signup', controllers.user.createUser);
app.get('/users/me', validateJWT, controllers.user.getUser);
app.get('/top-secret', validateJWT, controllers.user.getTopSecret);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
