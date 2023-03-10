"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = __importDefault(require("./options"));
const compile = (src, userop) => {
    init();
    work.options = Object.assign({}, options_1.default, userop);
    work.src.origin = src;
    tokens();
    make();
    return work.result;
};
// impl 
let work;
function init() {
    work = {
        options: options_1.default,
        src: {
            origin: "",
            tokens: []
        },
        result: {
            src: "",
            code: []
        },
    };
}
function tokens() {
    const { lbrace, rbrace } = work.options;
    const org = work.src.origin;
    const delims = [lbrace !== null && lbrace !== void 0 ? lbrace : '', rbrace !== null && rbrace !== void 0 ? rbrace : ''];
    let tokens = [org];
    delims.filter(x => x).forEach(delim => {
        tokens = tokens.map(token => token.split(delim).map((x, pos) => pos ? [delim, x] : [x])).flat(2).filter(x => x);
    });
    work.src.tokens = tokens;
}
function make() {
    const { lbrace, rbrace } = work.options;
    const org = work.src.origin;
    const tokens = work.src.tokens;
    const result = work.result;
    result.src = org;
    const code = result.code;
    tokens.forEach(token => {
        switch (token) {
            case lbrace:
                code.push("[");
                break;
            case rbrace:
                code.push("]");
                break;
            default:
                code.push(token);
                break;
        }
    });
}
exports.default = compile;
