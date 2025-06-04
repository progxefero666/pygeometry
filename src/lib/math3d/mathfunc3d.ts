import { Vector3d } from "../types/types";


/**
 * class MathFunc3d
 */
export class MathFunctions3d {

    public static getDistance(p1: Vector3d, p2: Vector3d): number {
        const dx = p1[0] - p2[0];
        const dy = p1[1] - p2[1];
        const dz = p1[2] - p2[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    static getCenter(p1: Vector3d, p2: Vector3d) {
        var coordCalc = [];
        for (let idx = 0; idx < 3; idx++) {
            coordCalc[idx] = p1[idx] + ((p2[idx] - p1[idx]) / 2.0);
        }
        return coordCalc;
    }//end 	


}//end class