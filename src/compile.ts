import defop, { Options } from "./options";

export interface Varcom {
    src: string;
    code: string[];
}

export default function (src: string, userop?: Options) {
    init();
    work.options = Object.assign({}, defop, userop);
    work.src.origin = src;

    tokens();
    make();

    return work.result;
}

// impl 

let work: Work;
interface Work {
    options: Options;
    src: {
        origin: string;
        tokens: string[];
    };

    result: Varcom;
}

function init() {
    work = {
        options: defop,
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