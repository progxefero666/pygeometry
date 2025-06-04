//src\lib\graph\model\grcircunf2d.ts

import { GrPoint2d } from "./grpoint2d";
import { WebColors } from "../webcolors";

/**
 * class GraphCircunf2d: 2d circle
 */
export class GrCircunf2d {

    public center: GrPoint2d;
    public radius: number;
    public color: string;

    constructor(center: GrPoint2d, radius: number, color?: string) {
        this.center = center;
        this.radius = radius;
        this.color = color || WebColors.COLOR_WHITE;
    }

}//end class
    