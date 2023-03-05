import { Options } from "./options";
export interface Varcom {
    src: string;
    code: string[];
}
declare let compile: (src: string, userop?: Options) => Varcom;
export default compile;
