"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userController = new user_controller_1.default();
const route = (0, express_1.Router)();
route.route('/')
    .get(userController.getAll)
    .post(userController.create);
route.route('/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.delete);
exports.default = route;
