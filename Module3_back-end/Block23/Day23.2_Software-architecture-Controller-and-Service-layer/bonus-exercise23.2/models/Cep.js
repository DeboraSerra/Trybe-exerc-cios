const conn = require('./connection');

const findCep = async (cep) => {
  const query = `
    SELECT c.cep, c.logradouro, b.bairro, b.localidade, b.uf
    FROM ceps AS c
    INNER JOIN bairros AS b
    ON c.bairro_id = b.id
    WHERE cep = ?
  `
  const [data] = await conn.execute(query, [cep]);
  return data;
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  let query = `SELECT id FROM bairros WHERE bairro = ?`;
  let id;
  const [data] =  await conn.execute(query, [bairro]);
  if (data.length === 0) {
    query = ` INSERT INTO bairros (bairro, localidade, uf)
    VALUES (?, ?, ?)`;
    const [{ insertId }] = await conn.execute(query, [bairro, localidade, uf]);
    id = insertId;
  } else id = data[0].id;
  query = `INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?)`;
  await conn.execute(query, [cep, logradouro, id]);
}

// const main = async () => {
//   const data = {
//     cep: '732255900',
//     logradouro: 'Rodovia DF-250',
//     bairro: 'Região dos Lagos',
//     localidade: 'Brasília',
//     uf: 'DF',
//   }
//   const address = await createCep(data);
//   console.log(address);
// }

// main();


module.exports = {
  findCep,
  createCep,
}
