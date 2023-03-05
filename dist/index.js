"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.compile = void 0;
const compile_1 = __importDefault(require("./compile"));
exports.compile = compile_1.default;
const run_1 = __importDefault(require("./run"));
exports.run = run_1.default;
