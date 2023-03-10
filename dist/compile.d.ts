import { Options } from "./options";
export interface Varcom {
    src: string;
    code: string[];
}
declare const compile: (src: string, userop?: Options | undefined) => Varcom;
export default compile;
