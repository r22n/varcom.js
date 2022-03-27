"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(varcom, resolver) {
    const mem = [[]];
    varcom.code.forEach(code => {
        switch (code) {
            case "[":
                mem.push([]);
                break;
            case "]": {
                const pop = mem.pop();
                const peek = mem[mem.length - 1];
                peek.push(resolver[pop.join("")]);
                break;
            }
            default: {
                const peek = mem[mem.length - 1];
                peek.push(code);
                break;
            }
        }
    });
    const peek = mem[mem.length - 1];
    return peek.join("");
}
exports.default = default_1;
