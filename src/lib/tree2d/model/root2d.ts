//src\lib\tree2d\model\root2d.ts

import { WebColors } from "@/lib/graph/webcolors";
import { Math2d } from "@/lib/math2d/math2d";
import { Vector2d } from "@/lib/types/types";
import { Join2d } from "./join2d";
import { Circunf2d } from "@/lib/math2d/model/circunf2d";


/**
 * class Join2d 
 */
export class Root2d {

    public static readonly DEF_COLOR: string = WebColors.COLOR_WHITE;

    public type:string;
    public color: string;
    public radius:number;
    public level: number;
    public direction: number;//0_1 
    public rotation: number;

    public nodes: Join2d[] = [];

    constructor(type:string,level:number,rotation:number,radius:number,direction?:number,color?: string) {
        this.type       = type;
        this.level      = level;
        this.rotation   = rotation;
        this.radius     = radius;
        this.direction  = direction || Math2d.DIR_0_1;
        this.color      = color || Root2d.DEF_COLOR;
    }

    public addNode(sub_node: Join2d): void {
        this.nodes.push(sub_node);
    }

    public setNodes(sub_nodes: Join2d[]): void {
        this.nodes = sub_nodes;
    }

    public getCircunf2d(): Circunf2d {
        return new Circunf2d([0,0], this.radius, this.direction, this.color);   
    }    

} //end class 