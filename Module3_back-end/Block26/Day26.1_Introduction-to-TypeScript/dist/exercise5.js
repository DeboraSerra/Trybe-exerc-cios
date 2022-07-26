"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.length = exports.units = void 0;
exports.units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const length = (value, unitBase, unitConv) => {
    const from = exports.units.indexOf(unitBase);
    const to = exports.units.indexOf(unitConv);
    const exponent = to - from;
    console.log({ from, to, exponent });
    return value * Math.pow(10, exponent);
};
exports.length = length;
