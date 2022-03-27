import { Varcom } from "./compile";

export default function (varcom: Varcom, resolver: { [name in string]: string }) {
    const mem: string[][] = [[]];
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