//src\lib\math2d\model\figure2d.ts

import { Dimension } from "@/lib/common/model/dimension2d";
import { WebColors } from "../../graph/webcolors";
import { CfCurve2d } from "../model/curve2d";
import { Vector2d } from "@/lib/types/types";


/**
 * Figure class represents a geometric figure.
 */
export class Figure2d {

    public static readonly DEF_COLOR: string = WebColors.COLOR_WHITE;
    
    public p_index: number = -1;
    public color: string;
    public position: Vector2d;
    public radius: number;
    public dimension: Dimension = Dimension.DEF;
    public curves: CfCurve2d[] = [];

    constructor(position: Vector2d, radius: number, curves: CfCurve2d[], color?: string) {
        this.position = position;
        this.radius = radius;
        this.curves = curves;
        this.color = color || Figure2d.DEF_COLOR;
        this.initParemeters();
    }

    initParemeters(): void {
        this.dimension = new Dimension(this.radius * 2, this.radius * 2);
    }

}//end class 