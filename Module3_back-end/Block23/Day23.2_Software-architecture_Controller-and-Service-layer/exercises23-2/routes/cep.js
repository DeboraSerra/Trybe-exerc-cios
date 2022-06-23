const { Router } = require('express');
const rescue = require('express-rescue');

const Cep = require('../controllers/Cep');

const cep = Router();

cep.get('/:cep', rescue(Cep.findCep));

cep.post('/', rescue(Cep.createCep));

module.exports = cep;
