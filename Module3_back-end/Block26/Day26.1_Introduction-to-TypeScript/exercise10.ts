const readlineSync = require('readline-sync')
import * as length from "./exercise5";
import * as mass from "./exercise6";
import * as capacity from "./exercise7";
import * as area from "./exercise8";
import * as volume from "./exercise9";

export const exec = () => {
  const conversion = ['length', 'mass', 'capacity', 'area', 'volume'];
  const indexConv = readlineSync.keyInSelect(conversion, 'What you want to convert?')
  const chosenConv = conversion[indexConv];
  const conversions = {
    length,
    mass,
    capacity,
    area,
    volume,
  }
  let units;
  let func;
  for (const conv in conversions) {
    if (conv === chosenConv) {
      units = conversions[conv].units;
      func = conversions[conv][conv];
    }
  }
  const value = readlineSync.question('What value you want to convert?')
  const fromIndex = readlineSync.keyInSelect(units, 'Which unit you want to convert from?');
  const toIndex = readlineSync.keyInSelect(units, 'Which unit you want to convert to?');
  const from = units[fromIndex];
  const to = units[toIndex];
  const result = func(value, from, to);

  return console.log(`${value}${from} is equal ${result}${to}`);
}

exec();
