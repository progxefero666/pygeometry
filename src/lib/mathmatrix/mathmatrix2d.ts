
import { MathJs } from "@/lib/mathbase/mathjslib";
import { Matrix } from "mathjs";

export class MathMatrix2d {

    public static readonly ZERO: number[][] = [
        [0, 0],
        [0, 0]
    ];

    public static createIdentityMatrix(n: number): Matrix {
        return MathJs.identity(n) as Matrix;
    }

    /*
    public static readonly IDENTITY: number[][] = [
        [1, 0],
        [0, 1]
    ];
    public static multiply(a: number[][], b: number[][]): number[][] {
        return [
            [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
            [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
        ];
    }
    */

}//end class