// src\lib\model\base\line2d.ts
import { WebColors } from "@/lib/graph/webcolors";
import { Vector2d } from "@/lib/types/types";
import { Math2d } from "../math2d";
import { MathGraphs } from "@/lib/graph/math/mathgraphs";

/**
 * class Line2d
 * Math2d.DIR_INVCLOKWISE  
 */
export class Line2d {

    public static readonly DEF: Line2d = new Line2d
        ([0,0],[0,0],Math2d.DIR_INVCW,MathGraphs.DEF_LINE_COLOR);

    public p_index: number = -1; 
    public color: string = WebColors.COLOR_WHITE;
    public linedir: number;
    public point_0:Vector2d;
    public point_1:Vector2d;

    constructor(point_0: Vector2d,point_1:Vector2d,linedir?:number,color?: string) {
        this.point_0 = point_0;
        this.point_1 = point_1;
        this.linedir = linedir|| Math2d.DIR_INVCW; // default direction is inverse clockwise
        this.color = color || MathGraphs.DEF_LINE_COLOR;
    }

} // end class