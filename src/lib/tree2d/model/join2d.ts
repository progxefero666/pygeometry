//src/lib/math2d/model/join2d.ts

import { WebColors } from "@/lib/graph/webcolors";
import { Math2d } from "@/lib/math2d/math2d";
import { Vector2d } from "@/lib/types/types";


/**
 * class Join2d 
 */
export class Join2d {

    public static readonly DEF_COLOR: string = WebColors.COLOR_WHITE;

    public type:string;
    public color: string;
    public level: number;
    public direction: number;//0_1

    public p_position: Vector2d;
    public p_radius:number;        
    public p_angle: number;
    public p_distance: number;
    
    public nodes: Join2d[] = [];

    constructor(type:string,level:number,
                p_position:Vector2d,p_radius:number,p_angle:number,p_distance:number,
                direction?:number,color?: string) {

        this.type       = type;
        this.p_position = p_position;
        this.p_radius   = p_radius;
        this.level      = level;
        this.p_angle    = p_angle;
        this.p_distance = p_distance;
        this.direction  = direction || Math2d.DIR_0_1;
        this.color      = color || Join2d.DEF_COLOR;
    }

    public addNode(sub_node: Join2d): void {
        this.nodes.push(sub_node);
    }

    public setNodes(sub_nodes: Join2d[]): void {
        this.nodes = sub_nodes;
    }

} //end class 