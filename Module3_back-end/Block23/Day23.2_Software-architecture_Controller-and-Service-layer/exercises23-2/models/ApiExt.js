const axios = require('axios');

const getCep = async (cep) => {
  const url = `https://ws.apicep.com/cep/${cep}.json`;
  const { data } = await axios.get(url);
  const { ok, code, state, city, district, address } = data;
  return { code, state, city, district, address, ok };
};

// const main = async () => {
//   const response = await getCep('73255-900');
//   console.log({response});
// }

// main();

module.exports = {
  getCep,
}
