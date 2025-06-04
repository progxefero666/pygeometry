//src\lib\mathbase\mathfunc.ts

import { MathJs } from "@/lib/mathbase/mathjslib";
//import { sqrt, Matrix } from 'mathjs';

export class MathFunctions {

    public static isZero(value: number): boolean {
        return Math.abs(value) < 1e-10;
    }

    public static isEqual(a: number, b: number): boolean {
        return Math.abs(a - b) < 1e-10;
    }

    public static esPar(numero: number): boolean {
        return numero % 2 === 0;
    }

    public static getPercent(value100: number, valueCalc: number): number {
        return (valueCalc * 100) / value100;
    }

    public static getValueOfPercent(value100: number, percCalc: number): number {
        return (value100 * percCalc) / 100.0;
    }

}//end class