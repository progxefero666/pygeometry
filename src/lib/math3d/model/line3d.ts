//src\lib\math3d\model\line3d.ts

import { WebColors } from "@/lib/graph/webcolors";
import { Math3d } from "../math3d";
import { Point3D } from "./point3d";
import { Vector3d } from "@/lib/types/types";


/**
 * class Line3d
 */
export class Line3d {

    public static readonly DEF:Line3d = new Line3d([0,0,0],[0,0,0]);

    public color: string;
    public linedir: number;
    public point_0:Vector3d;
    public point_1:Vector3d;

    constructor(point_0: Vector3d,point_1:Vector3d,linedir?:number,color?: string) {
        this.point_0 = point_0;
        this.point_1 = point_1;
        this.linedir = linedir|| 1; 
        this.color = color || WebColors.COLOR_WHITE;
    }

} // end class