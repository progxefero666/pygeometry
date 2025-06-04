//src\app\geometry\ctrgeocanvas.ts

import { CanvasPainter } from "@/lib/graph/canvas/canvaspainter";
import { GraphDriver2d } from "@/lib/graph/graphdriver2d";
import { WebColors } from "@/lib/graph/webcolors";
import { CfCurve2d } from "@/lib/math2d/model/curve2d";
import { Dimension } from "@/lib/math2d/model/dimension2d";
import { Line2d } from "@/lib/math2d/model/line2d";
import { Vector2d } from "@/lib/types/types";

/**
 * class CvMathGraph: 2d canvas
 */
export class CvMathGraph {

    public padding: number = 8;
    public cfg_renderAxis:boolean = true;
    public driver:GraphDriver2d;
    public backcolor: string;
    public cc: Vector2d = [0, 0];
    public objcanvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public dimension: Dimension;
    public axisX: Line2d = Line2d.DEF;
    public axisY: Line2d = Line2d.DEF;
    public painter: CanvasPainter;

    constructor(objcanvas: HTMLCanvasElement, dimension: Dimension, backcolor: string) {
        this.objcanvas = objcanvas;
        this.ctx = objcanvas.getContext('2d')!;
        this.dimension = dimension;
        this.backcolor = backcolor;
        this.painter = new CanvasPainter(this.ctx, this.dimension, this.backcolor);
        this.cc = [this.dimension.width / 2, Math.floor(this.dimension.height / 2)]
        this.axisX = new Line2d([0, this.cc[1]], [this.dimension.width, this.cc[1]]);
        this.axisY = new Line2d([this.cc[0], 0], [this.cc[0], this.dimension.height]);
        this.driver = new GraphDriver2d(this.cc);
        this.clear();
    };


    public clear() {
        this.ctx.clearRect(0, 0, this.dimension.width, this.dimension.height);
        if(this.cfg_renderAxis){this.renderAxis();}        
    };

    public renderAxis() {
        this.painter.drawAxis(WebColors.COLOR_BLUE, this.axisX);
        this.painter.drawAxis(WebColors.COLOR_YELLOW, this.axisY);
    };


} //end class

/*
    
    this.graphDimension = new Dimension(
        this.dimension.width - (this.padding * 2),
        this.dimension.height - (this.padding * 2));
    *    
public fillback() {
    this.ctx.fillStyle = this.backcolor;
    this.ctx.fillRect(0, 0, this.dimension.width, this.dimension.height);
};            
    public renderFigure(radius: number, color: string, curves: CfCurve2d[]) {

        this.painter.drawCf("#ff0000", this.cc, radius);

        for (let idx: number = 0; idx < curves.length; idx++) {

            const cvJointA: Vector2d = this.getDriverPoint(curves[idx].joins[0]);
            const cvJointB: Vector2d = this.getDriverPoint(curves[idx].joins[1]);
            const cvPoint: Vector2d  = this.getDriverPoint(curves[idx].point);
            
            this.painter.drawCf("#00ffff", cvJointA, 3);
            this.painter.drawCf("#00ffff", cvJointB, 3);
            this.painter.drawCurve2D(
                color,
                cvPoint,
                curves[idx].radius,
                curves[idx].startAngle,
                curves[idx].endAngle,
                curves[idx].directionInvClockD);
        }
    };

public renderMathGrappAxisXY(mathGraph: MathGrappAxisXY) {
   const lines_color: string = MathGraph.LINE_DEF_COLOR;
   const init_x: number = this.padding;
   const init_y: number = this.cc[1];
   let points: Point2D[] = [];
   for (let iter: number = 0; iter < mathGraph.dataX.length; iter++) {
       const x: number = init_x + mathGraph.dataX[iter];
       const y: number = init_y - mathGraph.dataY[iter];
       points.push(new Point2D(x, y));
   }
   this.painter.drawLines(points, lines_color);
};
public start = () => {
   this.animate();
}
public animate = async () => {
   this.clear();
   requestAnimationFrame(this.animate);
}
*/
