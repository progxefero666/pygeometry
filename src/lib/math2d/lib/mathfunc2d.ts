//src\lib\math2d\mathfunc2d.ts

import { Vector2d } from "@/lib/types/types";
import { Math2d } from "../math2d";
import { Line2d } from "../model/line2d";
import { MathVector2d } from "./mathvector2d";

/**
 * class MathFunction2d
 */
export class MathFunction2d {

    public static getDistance(pointA: Vector2d, pointB: Vector2d): number {
        const dx = pointA[0] - pointB[0];
        const dy = pointA[1] - pointB[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    public static getTwoPointsAngle(pointA: Vector2d, pointB: Vector2d): number {
        const dx = pointB[0] - pointA[0];
        const dy = pointB[1] - pointA[1];
        const angleRadians = Math.atan2(dy, dx);
        return angleRadians;
    }

    public static isEqual(a: number, b: number): boolean {
        return Math.abs(a - b) < Math2d.EPSILON;
    }

    public static isZero(value: number): boolean {
        return MathFunction2d.isEqual(value, 0);
    }

    public static isPointOnLine(lineStart: Vector2d, lineEnd: Vector2d, point: Vector2d): boolean {
        const vector1_x = point[0] - lineStart[0];
        const vector1_y = point[1] - lineStart[1];
        const vector2_x = lineEnd[0] - lineStart[0];
        const vector2_y = lineEnd[1] - lineStart[1];
        const crossProduct = (vector1_x * vector2_y) - (vector1_y * vector2_x);

        return MathFunction2d.isZero(crossProduct);
    }

    public static isPointOnLine2d(line: Line2d, point: Vector2d): boolean {
        return MathFunction2d.isPointOnLine(line.point_0, line.point_1, point);
    }



} //end class