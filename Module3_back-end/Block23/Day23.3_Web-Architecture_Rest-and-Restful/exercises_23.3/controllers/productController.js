const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();
  if (products.code === 1) return res.status(500).json({ message: 'Something went wrong' });
  res.status(200).json({data: products});
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  if (product === null) return res.status(404).json({ message: 'Product not found' });
  if (product.code === 1) return res.status(500).json({ message: 'Something went wrong' });
  res.status(200).json({ data: product });
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);
  if (newProduct.code === 1) return res.status(500).json({ message: 'Something went wrong' });
  res.status(201).json({ data: newProduct });
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);
  if (products && products.code === 1) return res.status(500).json({ message: 'Something went wrong' });
  res.status(204).end();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductModel.update(req.params.id, name, brand);
  if (products.code === 1) return res.status(500).json({ message: 'Something went wrong' });
  res.status(202).end();
});

module.exports = router;
