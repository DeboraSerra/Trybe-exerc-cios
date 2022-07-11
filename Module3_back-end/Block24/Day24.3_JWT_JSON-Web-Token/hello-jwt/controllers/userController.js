require('dotenv').config();
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const validateUser = async (obj) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  });
  const result = await schema.validateAsync(obj);
  return result;
}

const user = {
  createUser: async (req, res) => {
    const { username, password } = req.body;
    const data = await validateUser({ username, password });
    const random = Math.floor(Math.random() * 100);
    if (random > 50) data.admin = 1;
    else data.admin = 0;
    const exists = await userModel.getUser({ username });
    if (exists.length !== 0) {
      const error = new Error('User already exists');
      error.statusCode = 409;
      throw error;
    }
    const addedUser = await userModel.createUser(data);
    if (!addedUser.id) {
      const error = new Error('Error creating user')
      error.statusCode = 501;
      throw error;
    }
    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
    const token = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);
    res.status(203).json({ token })
  },
  getUser: async (req, res) => {
    const { user } = req;
    res.status(200).json({
      username: user.username,
      admin: user.admin,
    });
  },
  getTopSecret: async (req, res) => {
    const { user } = req;
    if (!user.admin) {
      const error = new Error('Restricted access');
      error.statusCode = 403;
      throw error;
    }
    res.status(200).json({
      secretInfo: 'Peter Parker is SpiderMan!',
    });
  },
  logUser: async (req, res) => {
    const { username, password } = req.body;
    const data = await validateUser({ username, password });
    const [{ id, password: pass, ...gotUser }] = await userModel.getUser(data);
    console.log({ gotUser });
    if (!gotUser.username) {
      const error = new Error('User not found')
      error.statusCode = 404;
      throw error;
    }
    if (pass !== password) {
      const error = new Error('Wrong password');
      error.statusCode = 401;
      throw error;
    }
    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
    const token = jwt.sign(gotUser, process.env.JWT_SECRET, jwtConfig);
    res.status(203).json({ token })
  }
}

module.exports = user;
