"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readlineSync = require('readline-sync');
const length = __importStar(require("./exercise5"));
const mass = __importStar(require("./exercise6"));
const capacity = __importStar(require("./exercise7"));
const area = __importStar(require("./exercise8"));
const volume = __importStar(require("./exercise9"));
const exec = () => {
    const conversion = ['length', 'mass', 'capacity', 'area', 'volume'];
    const indexConv = readlineSync.keyInSelect(conversion, 'What you want to convert?');
    const chosenConv = conversion[indexConv];
    const conversions = {
        length,
        mass,
        capacity,
        area,
        volume,
    };
    let units;
    let func;
    for (const conv in conversions) {
        if (conv === chosenConv) {
            units = conversions[conv].units;
            func = conversions[conv][conv];
        }
    }
    const value = readlineSync.question('What value you want to convert?');
    const fromIndex = readlineSync.keyInSelect(units, 'Which unit you want to convert from?');
    const toIndex = readlineSync.keyInSelect(units, 'Which unit you want to convert to?');
    const from = units[fromIndex];
    const to = units[toIndex];
    const result = func(value, from, to);
    console.log({ result });
    return console.log(`${value}${from} is equal ${result}${to}`);
};
exports.exec = exec;
(0, exports.exec)();
