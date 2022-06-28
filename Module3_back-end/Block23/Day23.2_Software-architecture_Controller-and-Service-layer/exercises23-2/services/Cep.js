const Cep = require('../models/Cep');
const ApiExt = require('../models/ApiExt');
const Joi = require('joi');

const isValid = (cep) => {
  if (!cep) return { code: 400, message: 'CEP is required' };
  if (!/\d{5}-?\d{3}/.test(cep)) return { code: 400, message: 'Invalid format' };
  return {};
}

const findCep = async (cep) => {
  const validate = isValid(cep);
  if (validate.message) return validate;
  let newCep = cep;
  if(!cep.includes('-')) newCep = cep.slice(0, 5) + '-' + cep.slice(5, 8);
  let data = await Cep.findCep(newCep);
  if (data.length === 0) {
    data = await ApiExt.getCep(newCep);
    const { code, address, district, city, state } = data
    if (!data.ok || !data) return { code: 404, message: 'CEP not found' };
    data = { cep: code, logradouro: address, bairro: district.slice(0, 19), localidade: city, uf: state }

    await createCep(data);
  };
  return { code: 200, data };
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const { error } = Joi.object({
    cep: Joi.string().pattern(new RegExp('\d{5}-\d{3}')).length(9).required(),
    logradouro: Joi.string().max(50).required(),
    bairo: Joi.string().max(20).required(),
    localidade: Joi.string().max(20).required(),
    uf: Joi.string().max(2).required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });
  if (error.isJoi) return { code: 400, message: error.details[0].message };
  const exists = await findCep(cep);
  if (exists.data) return { code: 409, message: 'CEP already exists' };
  await Cep.createCep({ cep, logradouro, bairro, localidade, uf });
  return { code: 200, created: true }
}

// const main = async () => {
//   const data = {
//     cep: '732255-900',
//     logradouro: 'Rodovia DF-250',
//     bairro: 'Região dos Lagos',
//     localidade: 'Brasília',
//     uf: 'DFD',
//   }
//   const address = await findCep(data.cep);
//   console.log(address);
// }

// main();

module.exports = {
  findCep,
  createCep,
}
