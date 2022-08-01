"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
exports.default = (err, _req, res, _next) => {
    const { name, message } = err;
    console.log({ name, message });
    switch (name) {
        case 'NotFoundError':
            return res.status(404).json({ message });
        default:
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: message || 'Internal Server Error' });
    }
};
