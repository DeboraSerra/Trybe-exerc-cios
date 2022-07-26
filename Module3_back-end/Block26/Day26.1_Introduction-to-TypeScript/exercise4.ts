import { months } from "./exercise2";
import { seasons } from "./exercise3";
const readlineSync = require('readline-sync');
import { exit } from 'process';

const getSeason = () => {
  const south = {
    [seasons.autumn]: [months.march, months.april, months.may, months.june],
    [seasons.winter]: [months.june, months.july, months.august, months.september],
    [seasons.spring]: [months.september, months.october, months.november, months.december],
    [seasons.summer]: [months.december, months.january, months.february, months.march],
  }
  const north = {
    [seasons.autumn]: [months.september, months.october, months.november, months.december],
    [seasons.winter]: [months.december, months.january, months.february, months.march],
    [seasons.spring]: [months.march, months.april, months.may, months.june],
    [seasons.summer]: [months.june, months.july, months.august, months.september],
  }
  const hemispheres = {
    north,
    south,
  };
  const indexHem: number = readlineSync.keyInSelect(Object.keys(hemispheres), 'Chose a hemisphere.');
  const monthsName = Object.keys(months);
  const indexMon: number = readlineSync.keyInSelect(monthsName, 'Choose a month.');
  const month = Object.values(months)[indexMon];
  const hemisphere = Object.keys(hemispheres)[indexHem];
  console.log(`Mês: ${month}`);
  console.log(`Hemisfério: ${hemisphere}`);
  console.log('Estações: ');
  const seasonChosen = Object.values(hemispheres)[indexHem];
  Object.entries(seasonChosen).forEach((entry) => {
    const [season, months] = entry;
    if (months.includes(month)) console.log(season);

  })
}

getSeason();
