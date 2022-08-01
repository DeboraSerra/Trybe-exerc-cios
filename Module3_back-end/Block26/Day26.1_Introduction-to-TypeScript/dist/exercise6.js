"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mass = exports.units = void 0;
exports.units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const mass = (value, baseU, toU) => {
    const from = exports.units.indexOf(baseU);
    const to = exports.units.indexOf(toU);
    const exponent = to - from;
    console.log({ from, to, exponent });
    return value * Math.pow(10, exponent);
};
exports.mass = mass;
