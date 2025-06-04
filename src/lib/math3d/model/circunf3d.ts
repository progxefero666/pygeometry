//src\lib\math3d\model\circunf3d.ts

import { WebColors } from "@/lib/graph/webcolors";


/**
 * class Circunf3d
 */
export class Circunf3d {

    public static readonly DEF: Circunf3d = new Circunf3d([0, 0, 0], 0);

    public color: string;
    public position: number[];
    public radius: number;

    constructor(position: number[], radius: number, color?: string) {
        this.position = position;
        this.radius = radius;
        this.color = color || WebColors.COLOR_WHITE;
    }

} // end class Circunf3d