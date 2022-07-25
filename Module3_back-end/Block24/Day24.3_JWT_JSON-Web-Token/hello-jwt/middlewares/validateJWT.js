require('dotenv').config();
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const error = new Error('Token not found');
    error.statusCode = 401;
    throw error;
  }
  const data = jwt.verify(token, process.env.JWT_SECRET);
  req.user = { ...data.data, admin: data.admin };
  next();
}
