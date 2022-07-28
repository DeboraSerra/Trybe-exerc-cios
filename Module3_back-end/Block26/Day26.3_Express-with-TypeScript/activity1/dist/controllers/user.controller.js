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
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor(service = new user_service_1.default()) {
        this.service = service;
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.service.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json({ users });
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.service.findById(+id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ user });
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.service.create(req.body);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ user });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            this.service.update(+id, req.body);
            res.status(203);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            this.service.delete(+id);
            res.status(203);
        });
    }
    ;
}
exports.default = UserController;
