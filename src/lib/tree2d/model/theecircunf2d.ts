//src\lib\tree2d\model\theecircunf2d.ts


import { Join2d } from "./join2d";
import { Vector2d } from "@/lib/types/types";
import { MathCircf2d } from "@/lib/math2d/lib/mathcircf2d";
import { Math2d } from "@/lib/math2d/math2d";
import { Line2d } from "@/lib/math2d/model/line2d";
import { Circunf2d } from "@/lib/math2d/model/circunf2d";


/**
 * class ThreeCircunf2d
 */
export class ThreeCircunf2d extends Join2d {

     // class properties
    public radius: number; 
    public position: Vector2d=[0,0]; 
    public p_tangents: Line2d[] = [];

    // constructor
    constructor(node:Join2d,radius:number) {
        super(node.type,node.level,
              node.p_position,50,
              node.p_angle,node.p_distance,
              node.direction,node.color);
        this.radius = radius;
        this.loadParameters();
    }

    public loadParameters(){
        const angle_inverse: number = Math2d.getAngleInverse(this.p_angle);
        this.position = MathCircf2d.getCircunfPoint(this.p_position,this.p_distance,angle_inverse);  
        const p_circ: Circunf2d = new Circunf2d(this.p_position,this.p_radius);
        const this_circ: Circunf2d = new Circunf2d(this.position,this.radius);
        this.p_tangents = MathCircf2d.getCircunfsExtTangents(p_circ,this_circ);
    }

    public getCircunf2d(): Circunf2d {
        return new Circunf2d(this.position, this.radius, this.direction, this.color);   
    }
    
    public setNodes(nodes:Join2d[]): void {
        this.nodes = nodes;
    }
        
} //end class