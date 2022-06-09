const { Router } = require('express');
const crypto = require('crypto');
const rescue = require('express-rescue');

const signupRouter = Router();

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const validateFields = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }
  req.headers.authorization = generateToken();
  next();
}

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token.length !== 16) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
}

signupRouter.post('/', rescue(validateFields), rescue(validateToken), rescue((req, res) => {
  const token = req.headers.authorization;
  res.status(200).json({ token });
}))

module.exports = signupRouter;
