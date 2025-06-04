import { WebColors } from "../webcolors";
import { GrCircunf2d } from "./grcircunf2d";
import { GrCurve2d } from "./grcurve2d";
import { GrLine2d } from "./grline2d";
import { GrPoint2d } from "./grpoint2d";

/**
 * class GrFunction2d
 */
export class GrFunction2d {
    
    public color:   string;
    public points:  GrPoint2d[]   = [];
    public lines:   GrLine2d[]    = [];
    public circunfs:GrCircunf2d[] = [];
    public curves:  GrCurve2d[]   = [];

    constructor(points:GrPoint2d[],lines:GrLine2d[],circunfs:GrCircunf2d[],curves: GrCurve2d[],color?:string) {
        this.points = points;
        this.lines = lines;
        this.circunfs = circunfs;
        this.curves = curves;      
        this.color = color || WebColors.COLOR_WHITE;
    }

    public addPoint(point: GrPoint2d): void {
        this.points.push(point);
    }

    public addCurve(curve: GrCurve2d): void {
        this.curves.push(curve);
    }
}