"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = exports.units = void 0;
exports.units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const area = (value, baseU, toU) => {
    const from = exports.units.indexOf(baseU);
    const to = exports.units.indexOf(toU);
    const exponent = (to - from) * 2;
    return value * Math.pow(10, exponent);
};
exports.area = area;
