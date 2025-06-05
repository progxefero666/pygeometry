// src\lib\math2d\model\point2d.ts

import { Vector2d } from "@/lib/types/types";
import { Math2d } from "../math2d";
import { MathGraphs } from "@/lib/graph/math/mathgraphs";


/**
 * class Point2d
 */
export class Point2d {

    public p_index: number = -1;
    public color: string = MathGraphs.DEF_PT_COLOR;
    public coords: Vector2d;

    constructor(coords: Vector2d, color?: string) {
        this.coords = coords;
        this.color = color || MathGraphs.DEF_PT_COLOR;
    }

    public equals(other: Point2d): boolean {
        let valueCalc_0 = Math.abs(this.coords[0] - other.coords[0]);
        let valueCalc_1 = Math.abs(this.coords[1] - other.coords[1]);
        return valueCalc_0 < Math2d.EPSILON &&
            valueCalc_1 < Math2d.EPSILON;
    }

    // static functions
    public static fromVector(vector: Vector2d, color?: string): Point2d {
        return new Point2d(vector, color);
    }



}// end class Point2d