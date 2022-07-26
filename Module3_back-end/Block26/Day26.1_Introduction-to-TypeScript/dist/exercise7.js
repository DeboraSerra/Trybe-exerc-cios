"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capacity = exports.units = void 0;
exports.units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const capacity = (value, baseU, toU) => {
    const from = exports.units.indexOf(baseU);
    const to = exports.units.indexOf(toU);
    const exponent = to - from;
    console.log({ from, to, exponent });
    return value * Math.pow(10, exponent);
};
exports.capacity = capacity;
