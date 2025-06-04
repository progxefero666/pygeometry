// src\lib\math2d\math2d.ts

import { Vector2d } from "@/lib/types/types";

/**
 * class Math2d.DIR_INVCLOKWISE  
 */
export class Math2d {

    // math constants
    public static readonly EPSILON = 1e-10;

    // circle direction constants
    public static readonly DIR_INVCW: number = 0;
    public static readonly DIR_CLOKWISE: number = 1;
    public static readonly DIR_DEF: number = Math2d.DIR_INVCW;
    
    // circle lines relation constants
    public static readonly REL_LINE_CF_SECANTE = 0; // two joins
    public static readonly REL_LINE_CF_TANGENTE = 1; // one join
    public static readonly REL_LINE_CF_EXTERIOR = 2; // not joins


} //end class