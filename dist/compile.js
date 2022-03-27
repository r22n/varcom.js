"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
function default_1(src, userop) {
    init();
    work.options = Object.assign({}, options_1.default, userop);
    work.src.origin = src;
    tokens();
    make();
    return work.result;
}
exports.default = default_1;
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
    const delims = [lbrace, rbrace];
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
