//src\lib\math3d\model\plane3d.ts

import { WebColors } from "@/lib/graph/webcolors";
import { Vector3d } from "@/lib/types/types";

/**
 * class Plane3d
 */
export class Plane3d {  
            
    public color: string;
    public normal: Vector3d;
    public plpoint: Vector3d;

    constructor(normal:Vector3d,plpoint:Vector3d,color?: string) {
        this.normal = normal;
        this.plpoint = plpoint;
        this.color = color ||  WebColors.COLOR_WHITE;
    }

 
} //end class Plane3d