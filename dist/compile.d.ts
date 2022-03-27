import { Options } from "./options";
export interface Varcom {
    src: string;
    code: string[];
}
export default function (src: string, userop?: Options): Varcom;
