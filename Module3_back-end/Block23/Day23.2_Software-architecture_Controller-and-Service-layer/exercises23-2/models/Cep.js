const conn = require('./connection');

const findCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?'
  const [data] = await conn.execute(query, [cep]);
  return data;
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = ` INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`;
  await conn.execute(query, [cep, logradouro, bairro, localidade, uf]);
}

const main = async () => {
  const data = {
    cep: '732255900',
    logradouro: 'Rodovia DF-250',
    bairro: 'Região dos Lagos (Sobradinho)',
    localidade: 'Brasília',
    uf: 'DF',
  }
  const address = await createCep(data);
  console.log(address.message);
}



module.exports = {
  findCep,
  createCep,
}
