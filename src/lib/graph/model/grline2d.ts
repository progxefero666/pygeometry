// src\lib\model\base\lines2d.ts    

import { Line2d } from "@/lib/math2d/model/line2d";
import { GrPoint2d } from "./grpoint2d";
import { WebColors } from "../webcolors";

/**
 * class GraphLines2d: 2d lines
 */ 
export class GrLine2d {

    public point_0: GrPoint2d;
    public point_1: GrPoint2d;
    public color: string;
    
    constructor(point_0: GrPoint2d, point_1: GrPoint2d,color?:string) {
        this.point_0 = point_0;
        this.point_1 = point_1;
        this.color = color || WebColors.COLOR_WHITE;
    }

}//end class
