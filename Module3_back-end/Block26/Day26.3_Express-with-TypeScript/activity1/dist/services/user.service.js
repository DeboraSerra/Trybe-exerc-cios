"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const connection_1 = __importDefault(require("../models/connection"));
const restify_errors_1 = require("restify-errors");
const validateUser = (user) => {
    const { name, email, password } = user;
    if (!name || !email || !password)
        throw new restify_errors_1.BadRequestError('The fields can\'t be empty');
};
class UserService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.findById(id);
            if (!user)
                throw new restify_errors_1.NotFoundError('NotFoundError');
            return user;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            validateUser(user);
            const users = yield this.model.getAll();
            const exists = users.find(({ email }) => email === user.email);
            if (exists)
                throw new restify_errors_1.ConflictError('User already exists');
            const newUser = yield this.model.create(user);
            return newUser;
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            validateUser(user);
            const foundUser = yield this.model.findById(id);
            if (!foundUser)
                throw new restify_errors_1.NotFoundError('User not found');
            const users = yield this.model.getAll();
            const exists = users.find(({ email }) => email === user.email);
            if (exists)
                throw new restify_errors_1.ConflictError('Email already exists');
            yield this.model.update(id, user);
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.model.findById(id);
            if (!foundUser)
                throw new restify_errors_1.NotFoundError('User not found');
            yield this.model.delete(id);
        });
        this.model = new user_model_1.default(connection_1.default);
    }
}
exports.default = UserService;
