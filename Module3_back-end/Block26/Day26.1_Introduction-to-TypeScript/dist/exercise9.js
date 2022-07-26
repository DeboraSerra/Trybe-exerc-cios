"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volume = exports.units = void 0;
exports.units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const volume = (value, baseU, toU) => {
    const from = exports.units.indexOf(baseU);
    const to = exports.units.indexOf(toU);
    const exponent = (to - from) * 3;
    return value * Math.pow(10, exponent);
};
exports.volume = volume;
