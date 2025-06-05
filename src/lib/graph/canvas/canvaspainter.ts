import { Dimension } from "@/lib/common/model/dimension2d";
import { Line2d } from "@/lib/math2d/model/line2d";
import { GrPoint2d } from "@/lib/graph/model/grpoint2d";
import { Vector2d } from "@/lib/types/types";
import { GrLine2d } from "../model/grline2d";
import { GrCurve2d } from "../model/grcurve2d";
import { GrCircunf2d } from "../model/grcircunf2d";
import { GrFigure2d } from "../model/grfigure2d";
import { GrFunction2d } from "../model/grfunction2d";


/**
 * class CanvasPainter: use instance
 */
export class CanvasPainter {

    public cc: Vector2d = [0, 0]; 
    public ctx: CanvasRenderingContext2D;
    public dimension: Dimension;
    public backcolor: string;

    constructor(ctx: CanvasRenderingContext2D, dimension: Dimension, backcolor: string) {
        this.ctx = ctx;
        this.dimension = dimension;
        this.backcolor = backcolor;
        this.cc = [this.dimension.width / 2, Math.floor(this.dimension.height / 2)]
    }

    public drawAxis(color: string, axis2d: Line2d) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(axis2d.point_0[0],axis2d.point_0[1]);
        this.ctx.lineTo(axis2d.point_1[0],axis2d.point_1[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    }//end    

    public drawPoint(point:GrPoint2d): void {
        this.ctx.strokeStyle = point.color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    
    public drawCf(circunference: GrCircunf2d): void {
        this.ctx.strokeStyle = circunference.color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(circunference.center.coord[0],circunference.center.coord[1], circunference.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    public drawLine(color: string,line:GrLine2d) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(line.point_0.coord[0],line.point_0.coord[1]);
        this.ctx.lineTo(line.point_1.coord[0],line.point_1.coord[1]);
        this.ctx.closePath();
        this.ctx.stroke();
    }//end

    
    public drawPointsLine(color: string,pointA: GrPoint2d, pointB: GrPoint2d) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(pointA.x, pointA.y);
        this.ctx.lineTo(pointB.x, pointB.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }//end

    public drawCurve(curve:GrCurve2d){
        this.ctx.beginPath();
        this.ctx.arc(curve.center.coord[0],curve.center.coord[1],curve.radius,
                     curve.startAngle,curve.endAngle,curve.direction);
        this.ctx.strokeStyle = curve.color; 
        this.ctx.lineWidth = 2; 
        this.ctx.stroke();
        this.ctx.closePath();
    }

    public drawPoints(point:GrPoint2d[]): void {
        for (const pt of point) {
            this.drawPoint(pt);
        }
    }
    
    public drawLines(lines: GrLine2d[]): void {
        for (const line of lines) {
            this.drawLine(line.color, line);
        }
    }

    public drawCircuns(circuns: GrCircunf2d[]): void {
        for (const circunf of circuns) {
            this.drawCf(circunf);
        }
    }

    public drawCurves(curves: GrCurve2d[]): void {
        for (const curve of curves) {
            this.drawCurve(curve);
        }
    }
    
    public drawFunction(func:GrFunction2d){
        this.drawPoints(func.points);
        this.drawLines(func.lines);
        this.drawCircuns(func.circunfs);
        this.drawCurves(func.curves);
    }

    public drawFigure(figure:GrFigure2d){
        for (const curve of figure.curves) {
            this.drawCurve(curve);
        }
    }

    public drawFigures(figures: GrFigure2d[]): void {
        for (const figure of figures) {
            this.drawFigure(figure);
        }
    }

}//end class

    /*

    public drawCurve2D(strokeColor: string, 
                       point: Vector2d, radius: number, 
                       startAngle: number, endAngle: number, counterclockwise: boolean) {
        this.ctx.beginPath();
        this.ctx.arc(point[0], point[1], radius, startAngle, endAngle, counterclockwise);
        this.ctx.strokeStyle = strokeColor; // Default color
        this.ctx.lineWidth = 2; // Default line width
        this.ctx.stroke();
        this.ctx.closePath();
    }//end  

    public drawLine(pointA: Point2d, pointB: Point2d, strokeColor: string) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.beginPath();
        this.ctx.moveTo(pointA.x, pointA.y);
        this.ctx.lineTo(pointB.x, pointB.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }//end

    public drawLines(points: Point2d[], strokeColor: string) {
        if (points.length < 2) { return; }
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.stroke();
    }//end    
    */