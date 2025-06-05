//src\lib\mathbase\mathunits.ts

/**
 * Class MathUnits.toRadians()
 */
export class MathUnits {

    public static readonly RAD: number = Math.PI / 180;
    public static readonly DEG: number = 180 / Math.PI;

    
    public static toRadians(degrees: number): number {
        return degrees * MathUnits.RAD;
    }

    public static toDegrees(radians: number): number {
        return radians * MathUnits.DEG;
    }

}//end class