//src\lib\math2d\dockers\docker2d.ts

import { Circunf2d } from "../model/circunf2d";
import { CfCurve2d } from "../model/curve2d";
import { Figure2d } from "../modelgroup/figure2d";
import { Line2d } from "../model/line2d";
import { Point2d } from "../model/point2d";
import { ThreeCircunf2d } from "@/lib/tree2d/model/theecircunf2d";

/**
 * v Container2d 
 */
export class Docker2d {

    //ThreeCircunf2d
    public threeCircunf2d: Map<string, ThreeCircunf2d>;

    // fields
    public points: Map<string, Point2d>;
    public lines: Map<string, Line2d>;
    public circunfs: Map<string, Circunf2d>;
    public curves: Map<string, CfCurve2d>;
    public figures: Map<string, Figure2d[]>;

    // constructor
    constructor(points?: Point2d[], lines?: Line2d[], circunfs?: Circunf2d[], curves?: CfCurve2d[], figures?: Figure2d[]) {

        this.points = new Map<string, Point2d>();
        this.lines = new Map<string, Line2d>();
        this.circunfs = new Map<string, Circunf2d>();
        this.curves = new Map<string, CfCurve2d>();
        this.figures = new Map<string, Figure2d[]>();

        this.threeCircunf2d = new Map<string, ThreeCircunf2d>();

        if (points) {
            points.forEach((point, index) => {this
                this.points.set(index.toString(), point);
            });
        }

        if (lines) {
            lines.forEach((line, index) => {
                this.lines.set(index.toString(), line);
            });
        }
        
        if (circunfs) {
            circunfs.forEach((circunf, index) => {
                this.circunfs.set(index.toString(), circunf);
            });
        }

        if (curves) {
            curves.forEach((curve, index) => {
                this.curves.set(index.toString(), curve);
            });
        }

        if (figures) {
            figures.forEach((figure, index) => {
                this.figures.set(index.toString(), [figure]);
            });
        }
    };// end constructor

    // clear functions
    //....................................................................................    
    public clearPoints(): void {
        this.points.clear();
    }

    public clearLines(): void {
        this.lines.clear();
    }

    public clearCircunfs(): void {
        this.circunfs.clear();
    }

    public clearCurves(): void {
        this.curves.clear();
    }

    public clearFigures(): void {
        this.figures.clear();
    }

    public clear(): void {
        this.clearPoints();
        this.clearLines();
        this.clearCircunfs();
        this.clearCurves();
        this.clearFigures();
    }

    // read functions
    //....................................................................................    

    public readPoint(name: string): Point2d {
        return this.points.get(name)!;
    }

    public readLine(name: string): Line2d {
        return this.lines.get(name)!;
    }

    public readCircunference(name: string): Circunf2d {
        return this.circunfs.get(name)!;
    }

    public readCurve(name: string): CfCurve2d {
        return this.curves.get(name)!;
    }

    public readFigure(name: string): Figure2d[] {
        return this.figures.get(name)!;
    }

    public readThreeCircunf2d(name: string): ThreeCircunf2d {
        return this.threeCircunf2d.get(name)!;
    }
    // add functions
    //....................................................................................
    public addPoint(name: string, point: Point2d): void {
        this.points.set(name, point);
    }

    public addLine(name: string, line: Line2d): void {
        this.lines.set(name, line);
    }

    public addCircunference(name: string, circunference: Circunf2d): void {
        this.circunfs.set(name, circunference);
    }

    public addCurve(name: string, curve: CfCurve2d): void {
        this.curves.set(name, curve);
    }

    public addFigure(name: string, figure: Figure2d): void {
        if (!this.figures.has(name)) {
            this.figures.set(name, []);
        }
        this.figures.get(name)?.push(figure);
    }

    public addThreeCircunf2d(name: string, threeCircunf2d: ThreeCircunf2d): void {
        this.threeCircunf2d.set(name, threeCircunf2d);
    }
    // delete functions
    //....................................................................................
    public deletePoint(name: string): void {
        if (this.points.has(name)) {
            this.points.delete(name);
        }
    }

    public deleteLine(name: string): void {
        if (this.lines.has(name)) {
            this.lines.delete(name);
        }
    }

    public deleteCircunference(name: string): void {
        if (this.circunfs.has(name)) {
            this.circunfs.delete(name);
        }
    }

    public deleteCurve(name: string): void {
        if (this.curves.has(name)) {
            this.curves.delete(name);
        }
    }

    public deleteFigure(name: string): void {
        if (this.figures.has(name)) {
            this.figures.delete(name);
        }
    }

    public deleteThreeCircunf2d(name: string): void {
        if (this.threeCircunf2d.has(name)) {
            this.threeCircunf2d.delete(name);
        }
    }
    // read array functions
    //....................................................................................

    public readArrayPoints(): Point2d[] {
        return Array.from(this.points.values());
    }

    public readArrayLines(): Line2d[] {
        return Array.from(this.lines.values());
    }

    public readArrayCircunfs(): Circunf2d[] {
        return Array.from(this.circunfs.values());
    }

    public readArrayCurves(): CfCurve2d[] {
        return Array.from(this.curves.values());
    }

    public readArrayFigures(): Figure2d[] {
        return Array.from(this.figures.values()).flat();
    }

    public readArrayThreeCircunf2d(): ThreeCircunf2d[] {
        return Array.from(this.threeCircunf2d.values());
    }
    // check functions
    //....................................................................................

    public hash_points(): boolean {
        return this.points.size > 0;
    }

    public hash_lines(): boolean {
        return this.lines.size > 0;
    }

    public hash_circunfs(): boolean {
        return this.circunfs.size > 0;
    }

    public hash_curves(): boolean {
        return this.curves.size > 0;
    }

    public hashFigures(): boolean {
        return this.figures.size > 0;
    }

    public hashThreeCircunf2d(): boolean {
        return this.threeCircunf2d.size > 0;
    }

}// end class Container2d