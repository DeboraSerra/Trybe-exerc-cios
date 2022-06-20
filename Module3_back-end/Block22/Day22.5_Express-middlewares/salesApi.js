const { Router } = require('express');
const rescue = require('express-rescue');

const salesRouter = Router();

const sales = [];

const validateProductName = (req, res, next) => {
  const { productName } = req.body;
  if (!productName || productName === '') {
    return res.status(400).json({ message: "The field 'productName' is mandatory" });
  }
  if (productName.length < 4) {
    return res.status(400).json({ message: "The field 'productName' must have at least 4 characters" });
  }
  next();
}

const validateInfos = (req, res, next) => {
  const { infos } = req.body;
  const { saleDate, warrantyPeriod } = infos;
  if (!infos || Object.keys(infos).length < 1) {
    return res.status(400).json({ message: "The field 'infos' is mandatory" });
  }
  if (!saleDate) {
    return res.status(400).json({ message: "The field 'saleDate' is mandatory" });
  }
  if (!saleDate.match(/\d{2}\/\d{2}\/\d{4}/g)) {
    return res.status(400).json({ message: "The field 'saleDate' is not a valid date" });
  }
  if (!warrantyPeriod) {
    return res.status(400).json({ message: "The field 'warrantyPeriod' is mandatory" });
  }
  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ message: "The field 'warrantyPeriod' must be between 1 and 3" });
  }
  next();
}

salesRouter.post('/', rescue(validateProductName), rescue(validateInfos), rescue((req, res) => {
  const { productName, infos } = req.body;
  sales.push({ productName, infos });
  res.status(201).json({ message: 'Sale registered successfully' });
}))

module.exports = salesRouter;
