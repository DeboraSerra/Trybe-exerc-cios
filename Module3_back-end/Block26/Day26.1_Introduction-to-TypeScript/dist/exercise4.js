"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise2_1 = require("./exercise2");
const exercise3_1 = require("./exercise3");
const readlineSync = require('readline-sync');
const getSeason = () => {
    const south = {
        [exercise3_1.seasons.autumn]: [exercise2_1.months.march, exercise2_1.months.april, exercise2_1.months.may, exercise2_1.months.june],
        [exercise3_1.seasons.winter]: [exercise2_1.months.june, exercise2_1.months.july, exercise2_1.months.august, exercise2_1.months.september],
        [exercise3_1.seasons.spring]: [exercise2_1.months.september, exercise2_1.months.october, exercise2_1.months.november, exercise2_1.months.december],
        [exercise3_1.seasons.summer]: [exercise2_1.months.december, exercise2_1.months.january, exercise2_1.months.february, exercise2_1.months.march],
    };
    const north = {
        [exercise3_1.seasons.autumn]: [exercise2_1.months.september, exercise2_1.months.october, exercise2_1.months.november, exercise2_1.months.december],
        [exercise3_1.seasons.winter]: [exercise2_1.months.december, exercise2_1.months.january, exercise2_1.months.february, exercise2_1.months.march],
        [exercise3_1.seasons.spring]: [exercise2_1.months.march, exercise2_1.months.april, exercise2_1.months.may, exercise2_1.months.june],
        [exercise3_1.seasons.summer]: [exercise2_1.months.june, exercise2_1.months.july, exercise2_1.months.august, exercise2_1.months.september],
    };
    const hemispheres = {
        north,
        south,
    };
    const indexHem = readlineSync.keyInSelect(Object.keys(hemispheres), 'Chose a hemisphere.');
    const monthsName = Object.keys(exercise2_1.months);
    const indexMon = readlineSync.keyInSelect(monthsName, 'Choose a month.');
    const month = Object.values(exercise2_1.months)[indexMon];
    const hemisphere = Object.keys(hemispheres)[indexHem];
    console.log(`Mês: ${month}`);
    console.log(`Hemisfério: ${hemisphere}`);
    console.log('Estações: ');
    const seasonChosen = Object.values(hemispheres)[indexHem];
    Object.entries(seasonChosen).forEach((entry) => {
        const [season, months] = entry;
        if (months.includes(month))
            console.log(season);
    });
};
getSeason();
