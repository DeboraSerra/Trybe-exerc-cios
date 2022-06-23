const { Router } = require('express');
const rescue = require('express-rescue');

const middleware = require('../controllers/Ping');

const ping = Router();

ping.get('/', rescue(middleware.Ping));

module.exports = ping;
