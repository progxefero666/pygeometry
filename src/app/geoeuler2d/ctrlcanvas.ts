//src\app\geoeuler2d\ctrlcanvas.ts

import { CanvasPainter } from "@/lib/graph/canvas/canvaspainter";
import { GraphDriver2d } from "@/lib/graph/graphdriver2d";
import { GrFigure2d } from "@/lib/graph/model/grfigure2d";
import { GrFunction2d } from "@/lib/graph/model/grfunction2d";
import { WebColors } from "@/lib/graph/webcolors";
import { Math2d } from "@/lib/math2d/math2d";
import { Circunf2d } from "@/lib/math2d/model/circunf2d";
import { CfCurve2d } from "@/lib/math2d/model/curve2d";
import { Dimension } from "@/lib/common/model/dimension2d";
import { Figure2d } from "@/lib/math2d/modelgroup/figure2d";
import { Line2d } from "@/lib/math2d/model/line2d";
import { Point2d } from "@/lib/math2d/model/point2d";

import { Vector2d } from "@/lib/types/types";
import { Scene2d } from "@/lib/math2d/modelgroup/scene2d";


/**
 * class CvMathGraph: 2d canvas
 */
export class ControlCanvas {

    public padding: number = 8;
    public cfg_renderAxis: boolean = false;

    public driver: GraphDriver2d;
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
        this.axisX = new Line2d([0, this.cc[1]], [this.dimension.width, this.cc[1]], Math2d.DIR_INVCW, WebColors.COLOR_BLUE);
        this.axisY = new Line2d([this.cc[0], 0], [this.cc[0], this.dimension.height], Math2d.DIR_INVCW, WebColors.COLOR_YELLOW);
        this.driver = new GraphDriver2d(this.cc);
        this.clear();
    };

    public clear() {
        this.ctx.clearRect(0, 0, this.dimension.width, this.dimension.height);
        if (this.cfg_renderAxis) { this.renderAxis(); }
    };

    public renderAxis() {
        this.painter.drawAxis(WebColors.COLOR_BLUE, this.axisX);
        this.painter.drawAxis(WebColors.COLOR_YELLOW, this.axisY);
    };

    
    // render functions
    //.........................................................................................

    public renderFigure(figure:Figure2d){
        const gr_figure: GrFigure2d = this.driver.getFigure(figure);
        this.painter.drawFigure(gr_figure);
    }
    
    public renderScene(scene: Scene2d) {
        const sc_points: Point2d[] = scene.getPoints();
        const sc_lines:  Line2d[] = scene.getLines();
        const sc_circfs: Circunf2d[] = scene.getCircunfs();
        const sc_curves: CfCurve2d[] = scene.getCurves();        

        this.painter.drawPoints(this.driver.getPoints(sc_points));
        this.painter.drawLines(this.driver.getLines(sc_lines));
        this.painter.drawCircuns(this.driver.getCircuns(sc_circfs));
        this.painter.drawCurves(this.driver.getCurves(sc_curves));        
    }



    /*
    public renderFunction(scene: GeoEuler2dScene_old) {
        const func:GrFunction2d = this.driver.getFunction(scene);
        this.painter.drawFunction(func);
    };
    */
} //end class
