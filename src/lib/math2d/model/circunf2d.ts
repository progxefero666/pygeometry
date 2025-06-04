//src\lib\model\base\circunf2d.ts

import { WebColors } from "@/lib/graph/webcolors";
import { Math2d } from "@/lib/math2d/math2d";
import { Vector2d } from "@/lib/types/types";

/**
 * class Circunf2d
 */
export class Circunf2d {
    
    public color: string = WebColors.COLOR_WHITE;

    // 0: inv clockwise, 1: clockwise MathGraphs.DEF_CF_COLOR
    //Math2d.DIR_INVCW
    public direction: number; 
    public position: Vector2d;
    public radius: number;

    constructor(center:Vector2d,radius:number,direction?:number,color?: string) {
        this.position = center;
        this.radius = radius;
        this.direction = direction || Math2d.DIR_INVCW;
        this.color = color || WebColors.COLOR_WHITE;
    }

}//end class