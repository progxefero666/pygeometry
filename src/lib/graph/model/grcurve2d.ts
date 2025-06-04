// src\lib\graph\model\grcurve2d.ts

import { WebColors } from "../webcolors";
import { GrPoint2d } from "./grpoint2d";


/**
 * class GrCurve2d: graph curve in 2d
 * Represents a curve defined by a series of points in 2D space.
 */
export class GrCurve2d {
    
    public color: string;
    public center: GrPoint2d;
    public radius: number;
    public direction: boolean = true;
    public startAngle: number = 0;
    public endAngle: number = 0;

    constructor(center:GrPoint2d,radius: number,startAngle:number,endAngle: number,color?:string) {
        this.center = center;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.color = color || WebColors.COLOR_WHITE;
    }

}// end class GrCurve2d