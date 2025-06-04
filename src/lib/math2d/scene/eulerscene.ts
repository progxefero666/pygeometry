// src\app\geoeuler2d\model\eulerscene.ts

import { Vector2d } from "@/lib/types/types";
import { Dimension } from "../model/dimension2d";
import { Line2d } from "../model/line2d";
import { Circunf2d } from "../model/circunf2d";
import { Point2d } from "../model/point2d";
import { CfCurve2d } from "../model/curve2d";
import { Figure2d } from "../model/figure2d";

/**
 * class GeoEuler2dScene
 * Circunf2d
 * Line2d
 * Point2d
 * type Vector2d
 * Dimension
 */
export class GeoEuler2dScene {

    // default values
    public static readonly DEF_DIMENSION = new Dimension(512,512);
    public static readonly DEF_BACKCOLOR = "#000000";

    public backcolor:string;
    public dimension:Dimension;
    public name:string;
    public description:string;

    public current_step:number = 0;
    public total_steps:number = 0;
    
    // geometric objects
    public points:Map<string,Point2d> ;
    public lines:Map<string,Line2d>;
    public circunfs:Map<string,Circunf2d>;
    public curves:Map<string,CfCurve2d>;
    public figures:Map<string,Figure2d[]>;

    // reference objects
    public ref_points:Map<string,Vector2d>;
    public ref_lines:Map<string,Line2d>;
    public ref_circunfs:Map<string,Circunf2d>;
    public ref_curves:Map<string,CfCurve2d>;
   
    public constructor(name:string,dimension:Dimension, description?:string){
        this.name = name;
        this.dimension = dimension;
        this.description = description || "";
        this.backcolor = GeoEuler2dScene.DEF_BACKCOLOR;
        this.points = new Map<string,Point2d>();
        this.lines = new Map<string,Line2d>();
        this.circunfs = new Map<string,Circunf2d>();
        this.curves= new Map<string,CfCurve2d>();
        this.figures = new Map<string,Figure2d[]>();
        this.ref_points = new Map<string,Vector2d>();
        this.ref_lines = new Map<string,Line2d>();
        this.ref_circunfs = new Map<string,Circunf2d>();        
        this.ref_curves = new Map<string,CfCurve2d>();
    }

    // add functions
    //....................................................................................
    public addPoint(name:string,point:Point2d):void{
        this.points.set(name,point);
    }

    public addLine(name:string,line:Line2d):void{
        this.lines.set(name,line);
    }

    public addCircunference(name:string,circunference:Circunf2d):void{
        this.circunfs.set(name,circunference);
    }   

    public deletePoint(name:string):void {
        if (this.points.has(name)) {    
            this.points.delete(name);
        }   
    }

    public deleteLine(name:string):void {
        if (this.lines.has(name)) {    
            this.lines.delete(name);
        }   
    }       

    public deleteCircunference(name:string):void {
        if (this.circunfs.has(name)) {    
            this.circunfs.delete(name);
        }   
    }

    public deleteCurve(name:string):void {
        if (this.curves.has(name)) {    
            this.curves.delete(name);
        }           
    }

    public deleteFigure(name:string):void {
        if (this.figures.has(name)) {    
            this.figures.delete(name);
        }           
    }   

    public deleteRefPoint(name:string):void {
        if (this.ref_points.has(name)) {    
            this.ref_points.delete(name);
        }   
    }

    public deleteRefLine(name:string):void {
        if (this.ref_lines.has(name)) {    
            this.ref_lines.delete(name);
        }   
    }       

    public deleteRefCircunference(name:string):void {
        if (this.ref_circunfs.has(name)) {    
            this.ref_circunfs.delete(name);
        }   
    }

    public deleteRefCurve(name:string):void {
        if (this.ref_curves.has(name)) {    
            this.ref_curves.delete(name);
        }           
    }
    

    // read functions
    //....................................................................................

    public getArrayPoints():Point2d[] {
        return Array.from(this.points.values());    
    }

    public getArrayLines():Line2d[] {   
        return Array.from(this.lines.values());
    }   

    public getArrayCircunfs():Circunf2d[] {
        return Array.from(this.circunfs.values());
    }

    public getArrayCurves():CfCurve2d[] {
        return Array.from(this.curves.values());
    }

    public getArrayFigures():Figure2d[] {
        return Array.from(this.figures.values()).flat();
    }

    // check functions
    //....................................................................................

    public hash_points():boolean {
        return this.points.size > 0;    
    }

    public hash_lines():boolean {
        return this.lines.size > 0;
    }   

    public hash_circunfs():boolean {
        return this.circunfs.size > 0;
    }
    
    public hash_curves():boolean {
        return this.curves.size > 0;
    }

    public hashFigures():boolean {
        return this.figures.size > 0;   
    }

    public hashRef_points():boolean {
        return this.ref_points.size > 0;
    }

    public hashRef_lines():boolean {
        return this.ref_lines.size > 0;
    }

    public hashRef_circunfs():boolean {
        return this.ref_circunfs.size > 0;
    }

    public hashRef_curves():boolean {
        return this.ref_curves.size > 0;
    }

} //end class
