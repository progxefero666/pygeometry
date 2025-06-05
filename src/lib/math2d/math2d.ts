// src\lib\math2d\math2d.ts

import { Vector2d } from "@/lib/types/types";
import { LargeNumberLike } from "crypto";

/**
 * class Math2d.getListaAnglesFromCero  
 */
export class Math2d {

    // math constants
    public static readonly EPSILON = 1e-10;

    public static readonly DIR_0_1: number = 0;
    public static readonly DIR_1_0: number = 1;

    // circle direction constants
    public static readonly DIR_INVCW: number = 0;
    public static readonly DIR_CLOKWISE: number = 1;
    public static readonly DIR_DEF: number = Math2d.DIR_INVCW;
    
    // circle lines relation constants
    public static readonly REL_LINE_CF_SECANTE = 0; // two joins
    public static readonly REL_LINE_CF_TANGENTE = 1; // one join
    public static readonly REL_LINE_CF_EXTERIOR = 2; // not joins

    public static getAngleInverse(angle:number): number {
        return this.getAngleInc(angle, Math.PI);
    }

    /*
    const angle_res = (angle + angle_inc) % (2 * Math.PI);
    return angle_res < 0 ? angle_res + 2 * Math.PI : angle_res;
    */
    public static getAngleInc(angle:number,angle_inc:number): number {
        let angle_res: number = angle + angle_inc;
        if(angle_res >= (Math.PI*2)) {
            angle_res = angle_res-(Math.PI*2);
        }
        if(angle_res < 0) {
            angle_res = (Math.PI*2) + angle_res;    
        }
        return angle_res;
    }

    public static getListaAnglesFromCero(count:number):number[] {
        const angle_unit: number = (Math.PI * 2) / count;
        const angles: number[] = [];
        for(let i=0; i<count; i++) {
            angles.push(i*angle_unit);
        }
        return angles;
    }

    public static getListaAngles(angle_init:number,count:number):number[] {

        const angle_unit: number = (Math.PI * 2) / count;
        const angles: number[] = [];
        for(let i=0; i<count; i++) {
            angles.push(Math2d.getAngleInc(angle_init, i*angle_unit));
        }
        return angles;
    }    
} //end class