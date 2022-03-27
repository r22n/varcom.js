import { Varcom } from "./compile";
export default function (varcom: Varcom, resolver: {
    [name in string]: string;
}): string;
