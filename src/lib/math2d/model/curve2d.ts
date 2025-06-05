//src\common\geometry\model\cfcurve2d.ts

import { MathCircf2d } from "@/lib/math2d/lib/mathcircf2d";
import { MathFunction2d } from "@/lib/math2d/lib/mathfunc2d";
import { Vector2d } from "@/lib/types/types";
import { Circunf2d } from "./circunf2d";
import { WebColors } from "@/lib/graph/webcolors";


/**
 * CfCurve2d class represents a circular curve in 2D space.
 */
export class CfCurve2d {
    
    public p_index: number = -1;
    public color: string = "#FFFFFF"; // Default color
    public ccrotation: number;
    public ccDistance: number;
    public directiondef: boolean;
    public radius: number;
    public point: Vector2d = [0, 0];
    public startAngle: number = 0;
    public rangeAngle: number = 0;;
    public endAngle: number = 0;
    public joins: Vector2d[] = [];


    constructor(ccDistance: number, ccrotation: number, radius: number, direction: boolean, color?: string) {
        this.ccDistance = ccDistance;
        this.ccrotation = ccrotation;
        this.radius = radius;
        this.directiondef = direction;
        this.calculateParams();
        this.color = color || WebColors.COLOR_WHITE;
    }

    //this.startAngle = this.ccrotation + (Math.PI / 2);
    //this.endAngle = this.ccrotation + (3 * Math.PI / 2)    
    private calculateParams(): void {
        this.point = MathCircf2d.getCircunfPoint([0, 0], this.ccDistance, this.ccrotation);
        //Math2d.DIR_INVCLOKWISE  
        const parentCf = new Circunf2d([0, 0], this.ccDistance);
        const curveCf = new Circunf2d(this.point, this.radius);
        this.joins = MathCircf2d.getCircunfsIntersectings(parentCf, curveCf);
        this.startAngle = MathFunction2d.getTwoPointsAngle(this.point, this.joins[1]);
        this.endAngle = MathFunction2d.getTwoPointsAngle(this.point, this.joins[0]);
    }

} //end class

//const effectiveRotation = this.ccrotation;
