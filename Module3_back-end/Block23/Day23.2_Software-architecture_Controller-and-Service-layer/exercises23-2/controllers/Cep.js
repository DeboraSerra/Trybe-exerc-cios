const Cep = require('../services/Cep');

const findCep = async (req, res) => {
  const { cep } = req.params;
  const { data, code, message } = await Cep.findCep(cep);
  if (message) return res.status(code).json(message);
  res.status(code).json(data);
}

const createCep = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { message, code, created } = await Cep.createCep({ cep, logradouro, bairro, localidade, uf });
  if (message) return res.status(code).json(message);
  res.status(code).end();
}

module.exports = {
  findCep,
  createCep,
}
