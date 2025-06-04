// src\lib\graph\graphdriver2d.ts

import { Line2d } from "../math2d/model/line2d";
import { GrPoint2d } from "./model/grpoint2d";
import { Vector2d } from "../types/types";
import { GrLine2d } from "./model/grline2d";
import { GrCircunf2d } from "./model/grcircunf2d";
import { Circunf2d } from "../math2d/model/circunf2d";
import { Point2d } from "../math2d/model/point2d";
import { CfCurve2d } from "../math2d/model/curve2d";
import { GrCurve2d } from "./model/grcurve2d";
import { GrFigure2d } from "./model/grfigure2d";
import { Figure2d } from "../math2d/model/figure2d";
import { GrFunction2d } from "./model/grfunction2d";
import { GeoEuler2dScene } from "../math2d/scene/eulerscene";

/**
 * class GraphDriver2d: 2d graph driver
 */
export class GraphDriver2d {

    public cc: Vector2d = [0, 0];
    public unit: number;

    constructor(cc: Vector2d, unit?: number) {
        this.cc = cc;
        this.unit = unit || 1;
    }

    // basic eleements
    //..........................................................................................

    public getPoint(point: Point2d): GrPoint2d {
        return new GrPoint2d([this.cc[0] + point.coords[0], this.cc[1] - point.coords[1]],point.color);
    }

    public getLine(line: Line2d): GrLine2d {
        const pointA = this.getPoint(new Point2d(line.point_0,line.color))
        const pointB = this.getPoint(new Point2d(line.point_1,line.color));
        return new GrLine2d(pointA, pointB,line.color);
    }

    public getCircunf(circunf: Circunf2d): GrCircunf2d {
        const center = this.getPoint(new Point2d(circunf.position,circunf.color));
        return new GrCircunf2d(center, circunf.radius,circunf.color);
    }
    
    public getCurve(curve2d:CfCurve2d):GrCurve2d {
        const center = this.getPoint(new Point2d(curve2d.point, curve2d.color));
        return new GrCurve2d(center,curve2d.radius, curve2d.startAngle, curve2d.endAngle, curve2d.color);
    }


    public getFigure(figure:Figure2d): GrFigure2d {
        const curves = figure.curves.map((curve) => this.getCurve(curve));
        return new GrFigure2d(figure.radius, curves, figure.color);
    }

    // collections
    //..........................................................................................

    public getPoints(pointa: Point2d[]): GrPoint2d[] {
        return pointa.map((point) => this.getPoint(point));
    }

    public getLines(lines: Line2d[]): GrLine2d[] {
        return lines.map((line) => this.getLine(line));
    }

    public getCircuns(circuns: Circunf2d[]): GrCircunf2d[] {
        return circuns.map((circunf) => this.getCircunf(circunf));
    }

    public getCurves(curves: CfCurve2d[]): GrCurve2d[] {
        return curves.map((curve) => this.getCurve(curve));
    }   

    public getFunction(scene:GeoEuler2dScene): GrFunction2d {
        const points:GrPoint2d[]= this.getPoints(scene.getArrayPoints());
        const lines:GrLine2d[]= this.getLines(scene.getArrayLines());
        const circunfs:GrCircunf2d[]= this.getCircuns(scene.getArrayCircunfs());
        const curves:GrCurve2d[]= this.getCurves(scene.getArrayCurves());
        return new GrFunction2d(points, lines, circunfs, curves, scene.backcolor);
    }

    
}//end class

