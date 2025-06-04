//src\lib\graph\model\grfigure2d.ts

import { GrCurve2d } from "./grcurve2d";
import { GrPoint2d } from "./grpoint2d";

/**
 * class GrFigure2d: graph figure in 2d
 */
export class GrFigure2d {

    public color: string;
    public center: GrPoint2d
    public radius: number;
    public curves: GrCurve2d[] = []; 

    constructor(radius:number,curves:GrCurve2d[], color?: string) {
        this.radius = radius;
        this.color = color || "white"; // Default color
        this.curves = curves;
        this.center = new GrPoint2d([0, 0], this.color); 
        this.initParameters()
    }

    initParameters(): void {
        // Initialize parameters if needed
    }

}// end class