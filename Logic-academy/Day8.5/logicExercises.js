//Using the given data.js file, create a function mapCities() that return an object wiht the keys are the regions (N, NE, CW, SE, S) and the values are arrays of objects with the name of the cities and its state.

const { regions, cities, states } = require("./data");

const mapCities = (states, cities) => {
  const obj = {};
  cities.forEach((city) => {
    const state = states.find((state) => state.short === city.state);
    (obj[city.region]) 
      ? obj[city.region].push({city: city.name, state: state.name}) 
      : obj[city.region] = [{city: city.name, state: state.name}];
  })

  return obj;
}

console.log(mapCities(states, cities));
/*
Expected output:
{
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ],
}
*/
