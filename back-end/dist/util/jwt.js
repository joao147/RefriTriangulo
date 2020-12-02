"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = String(process.env.JWT_SECRET);
var duration = String(process.env.JWT_DURATION);
exports.sign = function (payload) { return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: duration }); };
exports.verify = function (token) { return jsonwebtoken_1.default.verify(token, secret); };
