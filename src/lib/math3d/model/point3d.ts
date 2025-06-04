//src\lib\math3d\model\point3d.ts

import { WebColors } from "@/lib/graph/webcolors";
import { Vector3d } from "@/lib/types/types";

/**
 * class Point3D
 */
export class Point3D {

    public static readonly DEF:Point3D = new Point3D([0, 0, 0]);

    public color: string;
    public coords: Vector3d;

    constructor(coords: Vector3d,color?: string ) {
        this.coords = coords;
        this.color = color ||  WebColors.COLOR_WHITE;
    }

} //end class Point3D