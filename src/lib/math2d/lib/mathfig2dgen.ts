//src\common\math\mathcurve2d.ts

import { MathFunctions } from "../../mathbase/mathfunc";
import { Vector2d } from "../../types/types";
import { MathCircf2d } from "./mathcircf2d";
import { CfCurve2d } from "../model/curve2d";
import { Figure2d } from "../modelgroup/figure2d";



/**
 * class MathFigure2dGen
 */
export class MathFigure2dGen {

    public static getExtCfModel0(figureRadius: number): CfCurve2d[] {
        const countBaseElements: number = 8;
        const countLayers: number = 1;
        const countTotalElements: number = countBaseElements * countLayers;
        const angleRange = (2 * Math.PI) / countTotalElements;
        const elem_radius = MathCircf2d.getCircunfCurveRadius(figureRadius,angleRange); 

        const curves: CfCurve2d[] = [];
        let directionN = true;
        for (let idx = 0; idx < countTotalElements; idx++) {
            const elem_angle = idx * angleRange;
            curves.push(new CfCurve2d(figureRadius, elem_angle, elem_radius, directionN));
            //directionN = !directionN
        }
        return curves;
    }   

    public static genFigureModelA(position:Vector2d,figureRadius: number,color?: string):Figure2d {
        const countBaseElements: number = 10;
        const countLayers: number = 1;
        const countTotalElements: number = countBaseElements * countLayers;
        const angleRange = (2 * Math.PI) / countTotalElements;
        
        const elem_radius = MathCircf2d.getCircunfCurveRadius(figureRadius, angleRange);

        const curves: CfCurve2d[] = [];
        let directionN = true;
        for (let idx = 0; idx < countTotalElements; idx++) {
            const elem_angle = idx * angleRange;
            if(MathFunctions.esPar(idx)){
                curves.push(new CfCurve2d(figureRadius, elem_angle, elem_radius, directionN));
            }
            else {
                curves.push(new CfCurve2d(figureRadius, elem_angle, elem_radius, directionN));
            }
            
            directionN = !directionN
        }
        return new Figure2d(position,figureRadius,curves,color);
    }    

    public static getExtCfModelB(figureRadius: number): CfCurve2d[] {
        const countBaseElements: number = 10;
        const countLayers: number = 1;
        const countTotalElements: number = countBaseElements * countLayers;
        const angleRange = (2 * Math.PI) / countTotalElements;
        
        const elem_radius = MathCircf2d.getCircunfCurveRadius(figureRadius, angleRange);

        const radiusPercDiff: number= 30.0;
        const percGroupA: number = 100.0 - radiusPercDiff;
        const percGroupB: number = 100.0 + radiusPercDiff;
        const radiusGroupA: number = MathFunctions.getValueOfPercent(elem_radius, percGroupA);
        const radiusGroupB: number = MathFunctions.getValueOfPercent(elem_radius, percGroupB);

        const curves: CfCurve2d[] = [];
        let directionN = true;
        for (let idx = 0; idx < countTotalElements; idx++) {
            const elem_angle = idx * angleRange;
            if(MathFunctions.esPar(idx)){
                curves.push(new CfCurve2d(figureRadius, elem_angle, radiusGroupA, directionN));
            }
            else {
                curves.push(new CfCurve2d(figureRadius, elem_angle, radiusGroupB, directionN));
            }
            
            directionN = !directionN
        }
        return curves;
    }

    public static getExtCfModelC(figureRadius: number): CfCurve2d[] {
        const countBaseElements: number = 10;
        const countLayers: number = 1;
        const countTotalElements: number = countBaseElements * countLayers;
        const angleRange = (2 * Math.PI) / countTotalElements;
        
        const elem_radius = MathCircf2d.getCircunfCurveRadius(figureRadius, angleRange);

        const radiusPercDiff: number= 30.0;
        
        const percGroupA: number = 100.0 - radiusPercDiff;
        const percGroupB: number = 100.0 + radiusPercDiff;
        const radiusGroupA: number = MathFunctions.getValueOfPercent(elem_radius, percGroupA);
        const radiusGroupB: number = MathFunctions.getValueOfPercent(elem_radius, percGroupB);

        const curves: CfCurve2d[] = [];
        let directionN = true;
        for (let idx = 0; idx < countTotalElements; idx++) {
            const elem_angle = idx * angleRange;
            if(MathFunctions.esPar(idx)){
                curves.push(new CfCurve2d(figureRadius, elem_angle, radiusGroupA, directionN));
            }
            else {
                curves.push(new CfCurve2d(figureRadius, elem_angle, radiusGroupB, directionN));
            }
            
            directionN = !directionN
        }
        return curves;
    }

    /*
    XMath.esPar(idx)

    public static getCurvePoint(center: [number, number], radius: number, angle: number): [number, number] {
        const coord_x = center[0] + radius * Math.cos(angle);
        const coord_y = center[1] + radius * Math.sin(angle);
        return [coord_x, coord_y];
    }
    */

}//end