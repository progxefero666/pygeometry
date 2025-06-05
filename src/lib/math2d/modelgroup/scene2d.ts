// src\app\geoeuler2d\model\eulerscene.ts

import { Vector2d } from "@/lib/types/types";
import { Dimension } from "../../common/model/dimension2d";
import { Line2d } from "../model/line2d";
import { Circunf2d } from "../model/circunf2d";
import { Point2d } from "../model/point2d";
import { CfCurve2d } from "../model/curve2d";
import { Figure2d } from "./figure2d";
import { Docker2d } from "../dockers/docker2d";
import { PaginatorData } from "@/lib/common/util/paginatordata";

/**
 * class GeoEuler2dScene
 * Circunf2d
 * Line2d
 * Point2d
 * type Vector2d
 * Dimension
 */
export class Scene2d {

    // default values
    public static readonly DEF_DIMENSION = new Dimension(512, 512);
    public static readonly DEF_BACKCOLOR = "#000000";

    public backcolor: string;
    public dimension: Dimension;
    public name: string;
    public description: string;

    public current_step: number = 0;
    public total_steps: number = 0;
    public paginatorData:PaginatorData;
    public dockers: Map<string, Docker2d>;

    
    public constructor(name: string, dimension: Dimension, description?: string) {
        this.name = name;
        this.dimension = dimension;
        this.description = description || "";
        this.backcolor = Scene2d.DEF_BACKCOLOR;
        this.dockers = new Map<string, Docker2d>();
        this.paginatorData = new PaginatorData(this.current_step,true,true);
    }

    // docker collection functions
    //....................................................................................
    public readDocker(name: string): Docker2d{
        return this.dockers.get(name)!;
    }

    public addDocker(name: string, container: Docker2d): void {
        this.dockers.set(name, container);
    }

    public deleteDocker(name:string): void {
        this.dockers.delete(name);
    }   

    // update 
    //....................................................................................    
    public update(): void{
        let prev_enabled:boolean = false;
        let next_enabled:boolean = false;
        if(this.current_step > 0){
            prev_enabled = true;
        }
        if(this.current_step < this.total_steps - 1){
            next_enabled = true;
        }
        this.paginatorData = new PaginatorData(this.current_step,prev_enabled,next_enabled);
    }

    // docker read element functions
    //....................................................................................

    public getPoint(docker_name:string,point_name:string):Point2d {
        return this.readDocker(docker_name).readPoint(point_name);
    }

    public getLine(docker_name:string,line_name:string):Line2d {
        return this.readDocker(docker_name).readLine(line_name);
    }

    public getCircunf(docker_name:string,circunf_name:string):Circunf2d {
        return this.readDocker(docker_name).readCircunference(circunf_name);
    }

    public getCurve(docker_name:string,curve_name:string):CfCurve2d {
        return this.readDocker(docker_name).readCurve(curve_name);
    }

    public getFigure(docker_name:string,figure_name:string):Figure2d[] {
        return this.readDocker(docker_name).readFigure(figure_name);
    }

    // add element functions
    //....................................................................................
    public addPoint(docker_name:string,point_name:string,point:Point2d):void {
        this.readDocker(docker_name).addPoint(point_name,point);
    }

    public addLine(docker_name:string,line_name:string,line:Line2d):void {
        this.readDocker(docker_name).addLine(line_name,line);
    }

    public addCircunf(docker_name:string,circunf_name:string,circunf:Circunf2d):void {
        this.readDocker(docker_name).addCircunference(circunf_name,circunf);
    }

    public addCurve(docker_name:string,curve_name:string,curve:CfCurve2d):void {
        this.readDocker(docker_name).addCurve(curve_name,curve);
    }

    public addFigure(docker_name:string,figure_name:string,figure:Figure2d):void {
        this.readDocker(docker_name).addFigure(figure_name,figure);
    }

    // docker read array functions
    //....................................................................................

    public getPoints(docker_name?:string):Point2d[] {
        let docker:Docker2d|null=null;
        if(!docker_name){
            docker = Array.from(this.dockers.values())[this.current_step];            
        }
        else {
            docker = this.dockers.get(docker_name)!;
        }
        return docker.readArrayPoints();
    }

    public getLines(docker_name?:string):Line2d[] {   
        let docker:Docker2d|null=null;
        if(!docker_name){
            docker = Array.from(this.dockers.values())[this.current_step];            
        }
        else {
            docker = this.dockers.get(docker_name)!;
        }
        return docker.readArrayLines();
    }

    public getCircunfs(docker_name?:string):Circunf2d[] {
        let docker:Docker2d|null=null;
        if(!docker_name){
            docker = Array.from(this.dockers.values())[this.current_step];            
        }
        else {
            docker = this.dockers.get(docker_name)!;
        }        
        return docker.readArrayCircunfs();
    }

    public getCurves(docker_name?:string):CfCurve2d[] {
        let docker:Docker2d|null=null;
        if(!docker_name){
            docker = Array.from(this.dockers.values())[this.current_step];            
        }
        else {
            docker = this.dockers.get(docker_name)!;
        }        
        return docker.readArrayCurves();
    }

    public getFigures(docker_name?:string):Figure2d[] {
        let docker:Docker2d|null=null;
        if(!docker_name){
            docker = Array.from(this.dockers.values())[this.current_step];            
        }
        else {
            docker = this.dockers.get(docker_name)!;
        }        
        return docker.readArrayFigures();
    }

} //end class
