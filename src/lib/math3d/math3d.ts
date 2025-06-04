//

import { Vector3d } from "../types/types";

/**
 * class Math3d
 */
export class Math3d {
    
    // math constants
    public static readonly EPSILON = 1e-10;

    // direction constants
    public static readonly DIR_INVCW: number = 0;
    public static readonly DIR_CW: number = 1;
    public static readonly DIR_DEF: number = Math3d.DIR_INVCW;

    public static readonly DIR_POS: number = 1;
    public static readonly DIR_NEG: number = -1;
        
    // sistem 3d
    public static AXIS_X:number = 0;
    public static AXIS_Y:number = 1;    
    public static AXIS_Z:number = 2;

    public static PLANE_X:Vector3d = [1, 0, 0];
    public static PLANE_Y:Vector3d = [0, 1, 0]; 
    public static PLANE_Z:Vector3d = [0, 0, 1];


} //end class

