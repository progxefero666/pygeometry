//src\lib\tree2d\three2d.ts

import { Docker2d } from "../math2d/dockers/docker2d";

/**
 * class Three2d.Three2d.TYPE_CIRCUNF
 */
export class Three2d {

    public static readonly TYPE_POINT: string = "point";
    public static readonly TYPE_CIRCUNF: string = "circunf";
    public static readonly TYPE_LINE: string = "line";
    public static readonly TYPE_BOX: string = "box";
    public static readonly TYPE_FIGURE: string = "figure";

    public static readonly node_types: string[] = [
        Three2d.TYPE_POINT,
        Three2d.TYPE_CIRCUNF,   
        Three2d.TYPE_LINE,
        Three2d.TYPE_BOX,
        Three2d.TYPE_FIGURE];

}// end class