//src\lib\math2d\matharea2d.ts

import { Vector2d } from "../../types/types";


/**
 * class MathArea2d
 */
export class MathArea2d {


    public static getTriangleArea(pointA: Vector2d, pointB: Vector2d, pointC: Vector2d): number {
        const area = Math.abs(
            (pointA[0] * (pointB[1] - pointC[1]) +
             pointB[0] * (pointC[1] - pointA[1]) +
             pointC[0] * (pointA[1] - pointB[1])) / 2
        );
        return area;
    }

    public static getCiruncfArea(radius: number): number {
        return Math.PI * (radius * radius);
    }

    
} // end of class MathArea2d