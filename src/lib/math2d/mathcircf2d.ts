//src\lib\math2d\mathcircf2d.ts

import { Circunf2d } from "./model/circunf2d";
import { Line2d } from "./model/line2d";
import { Vector2d } from "../types/types";
import { Math2d } from "./math2d";
import { MathFunction2d } from "./mathfunc2d";
import { MathVector2d } from "./mathvector2d";
import { MathGraphs } from "../graph/math/mathgraphs";

/**
 * class MathCircf2d.getExternalCommonTangents(circA: Circunf2d, circB: Circunf2d): Line2d[]
 */
export class MathCircf2d {

    static getCfCurveRadius(radio: number, angleRange: number): number {
        return radio * Math.sin(angleRange / 2);
    }
        
    public static getCfPoint(centro: Vector2d, radio: number, anguloRadianes: number): Vector2d {

        const xRelativo = radio * Math.cos(anguloRadianes);
        const yRelativo = radio * Math.sin(anguloRadianes);
        const x = centro[0] + xRelativo;
        const y = centro[1] + yRelativo;

        return [x, y];
    }

    public static getLineCircleRelation(circleCenter: Vector2d, circleRadius: number, line: Line2d): number {
        const lineLength = MathFunction2d.getDistance(line.point_0, line.point_1);
        if (MathFunction2d.isZero(lineLength)) {
            throw new Error("Cannot determine line-circle.");
        }

        const A = line.point_1[1] - line.point_0[1];
        const B = line.point_0[0] - line.point_1[0];
        const C = -A * line.point_0[0] - B * line.point_0[1];

        const distanceNumerator = Math.abs(A * circleCenter[0] + B * circleCenter[1] + C);
        const distance = distanceNumerator / lineLength;

        if (MathFunction2d.isEqual(distance, circleRadius)) {
            return Math2d.REL_LINE_CF_TANGENTE;
        }
        else if (distance < circleRadius) {
            return Math2d.REL_LINE_CF_SECANTE;
        }
        else {
            return Math2d.REL_LINE_CF_EXTERIOR;
        }
    }

    /**
     * Checks if two circles have potential intersection points (including tangent cases).
     */
    public static areCirclesIntersecting(circf_0: Circunf2d, circf_1: Circunf2d): boolean {
        const d = MathFunction2d.getDistance(circf_0.position, circf_1.position);
        const r0 = circf_0.radius;
        const r1 = circf_1.radius;
        // Caso 1: Círculos concéntricos
        if (MathFunction2d.isZero(d)) {
            return MathFunction2d.isEqual(r0, r1);
        }
        if (d > r0 + r1 + Math2d.EPSILON || d < Math.abs(r0 - r1) - Math2d.EPSILON) {
            return false;
        }
        const a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
        const hSquared = r0 * r0 - a * a;
        if (hSquared < -Math2d.EPSILON) {
            return false;
        }
        return true;
    }

    public static getInter(circf_0: Circunf2d, circf_1: Circunf2d): Vector2d[] {
        const intersectionPoints: Vector2d[] = [];
        const d = MathFunction2d.getDistance(circf_0.position, circf_1.position);

        // Caso 1: Círculos concéntricos
        if (MathFunction2d.isZero(d)) {
            if (MathFunction2d.isEqual(circf_0.radius, circf_1.radius)) {
                throw new Error("Concentric and identical circles have infinite intersection points.");
            } else {
                return intersectionPoints;
            }
        }
        if (!MathCircf2d.areCirclesIntersecting(circf_0, circf_1)) {
            return intersectionPoints;
        }

        const r0 = circf_0.radius;
        const r1 = circf_1.radius;
        const P0 = circf_0.position;
        const P1 = circf_1.position;
        const a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
        const hSquared = r0 * r0 - a * a;
        const h = Math.sqrt(Math.max(0, hSquared));

        // Calcular las coordenadas del punto P3.
        // P3 = P0 + a * (vector unitario de P0 a P1)
        const vec_P0_P1_x = P1[0] - P0[0];
        const vec_P0_P1_y = P1[1] - P0[1];

        const p3_x = P0[0] + (a / d) * vec_P0_P1_x;
        const p3_y = P0[1] + (a / d) * vec_P0_P1_y;
        const perp_vec_unit_x = -vec_P0_P1_y / d;
        const perp_vec_unit_y = vec_P0_P1_x / d;
        const offsetX = h * perp_vec_unit_x;
        const offsetY = h * perp_vec_unit_y;

        // Primer punto de intersección
        const intersection1: Vector2d = [p3_x + offsetX, p3_y + offsetY];
        intersectionPoints.push(intersection1);

        if (!MathFunction2d.isZero(h)) {
            const intersection2: Vector2d = [p3_x - offsetX, p3_y - offsetY];
            intersectionPoints.push(intersection2);
        }
        return intersectionPoints;
    }


    public static getInterLine(circf_0: Circunf2d, circf_1: Circunf2d): Line2d {
        const intersections = MathCircf2d.getInter(circf_0, circf_1);
        if (intersections.length < 2) {
            throw new Error("circles do not intersect at two distinct points.");
        }
        const i1 = intersections[0];
        const i2 = intersections[1];
        const angle_i1_to_i2 = MathFunction2d.getTwoPointsAngle(i1, i2);

        let point0: Vector2d;
        let point1: Vector2d;
        if (angle_i1_to_i2 >= 0 && angle_i1_to_i2 < Math.PI) {
            point0 = i1;
            point1 = i2;
        } else {
            point0 = i2;
            point1 = i1;
        }
        let linedir: number = 1;
        if (MathFunction2d.isEqual(point0[0], i1[0]) && MathFunction2d.isEqual(point0[1], i1[1])) {
            linedir = 0;
        }
        return new Line2d(point0, point1, linedir);
    }


    public static getArea(radius: number): number {
        return Math.PI * (radius * radius);
    }

    /*
       solo para circunferencia y linea secante 
    */
    public static getLineSecCfIntersections(line: Line2d, circle: Circunf2d): Vector2d[] {

        const dx = line.point_1[0] - line.point_0[0];
        const dy = line.point_1[1] - line.point_0[1];
        const lineDirection: Vector2d = [dx, dy];

        const a = lineDirection[0] * lineDirection[0] + lineDirection[1] * lineDirection[1];
        const ocX = line.point_0[0] - circle.position[0];
        const ocY = line.point_0[1] - circle.position[1];
        const b = 2 * (ocX * lineDirection[0] + ocY * lineDirection[1]);
        const c = (ocX * ocX + ocY * ocY) - (circle.radius * circle.radius);
        const delta = b * b - 4 * a * c;
        const sqrtDelta = Math.sqrt(delta);
        const t1 = (-b - sqrtDelta) / (2 * a);
        const t2 = (-b + sqrtDelta) / (2 * a);
        return [
            [line.point_0[0] + t1 * lineDirection[0], line.point_0[1] + t1 * lineDirection[1]],
            [line.point_0[0] + t2 * lineDirection[0], line.point_0[1] + t2 * lineDirection[1]]
        ];
    }

    public static findExternallyTangentCircles(circA: Circunf2d,circB: Circunf2d,radiusR: number): Circunf2d[] {

        const rA_aux = circA.radius + radiusR;
        const C_A_aux = new Circunf2d(circA.position, rA_aux,Math2d.DIR_INVCW);
        const rB_aux = circB.radius + radiusR;
        const C_B_aux = new Circunf2d(circB.position, rB_aux,Math2d.DIR_INVCW);

        let intersectionCenters: Vector2d[];
        try {
            intersectionCenters = MathCircf2d.getInter(C_A_aux, C_B_aux);
        } catch (e: any) {
            const distCentersAB = MathFunction2d.getDistance(circA.position, circB.position);
            if (MathFunction2d.isZero(distCentersAB) &&
                MathFunction2d.isEqual(circA.radius, circB.radius)) {
                throw new Error(
                    "circA y circB son idénticas. Existen infinitas circunferencias de radio R " +
                    "tangentes exteriormente a ellas."
                );
            }
            throw e;
        }
        const tangentCircles: Circunf2d[] = [];
        for (const center of intersectionCenters) {
            tangentCircles.push(new Circunf2d(center, radiusR, circA.direction));
        }
        return tangentCircles;
    }

    public static getExternalCommonTangents(circA: Circunf2d, circB: Circunf2d): Line2d[] {
        const distCenters = MathFunction2d.getDistance(circA.position, circB.position);

        /*
        if (MathFunction2d.isZero(distCenters)) {
            if (MathFunction2d.isEqual(circA.radius, circB.radius)) {
                throw new Error("existen infinitas tangentes comunes.");
            } else {
                throw new Error("no existen tangentes exteriores comunes.");
            }
        }
        */
        // Caso especial: Radios iguales
        /*
        if (MathFunction2d.isEqual(circA.radius, circB.radius)) {
            const R = circA.radius;
            const P1 = circA.position;
            const P2 = circB.position;

            const vec_P1P2 = MathVector2d.subtract(P2, P1);
            // Vector perpendicular normalizado a la línea que une los centros
            const dir_perp_norm = MathVector2d.normalize([-vec_P1P2[1], vec_P1P2[0]]);

            const T1_C1 = MathVector2d.add(P1, MathVector2d.multiplyByScalar(dir_perp_norm, R));
            const T1_C2 = MathVector2d.add(P2, MathVector2d.multiplyByScalar(dir_perp_norm, R));
            const line1 = new Line2d(T1_C1, T1_C2); // linedir por defecto

            const T2_C1 = MathVector2d.add(P1, MathVector2d.multiplyByScalar(dir_perp_norm, -R));
            const T2_C2 = MathVector2d.add(P2, MathVector2d.multiplyByScalar(dir_perp_norm, -R));
            const line2 = new Line2d(T2_C1, T2_C2); // linedir por defecto

            return [line1, line2];
        }
        */

        // General case: diferent radius
        let c_large: Circunf2d, c_small: Circunf2d;
        if (circA.radius > circB.radius) {
            c_large = circA;
            c_small = circB;
        } else {
            c_large = circB;
            c_small = circA;
        }

        const P1 = c_large.position; // Centro de la circunferencia grande
        const R1 = c_large.radius;
        const P2 = c_small.position; // Centro de la circunferencia pequeña
        const R2 = c_small.radius;

        // Radio de la circunferencia auxiliar C_aux (centrada en P1)
        const R_aux = R1 - R2; // R_aux > 0 porque R1 > R2 (ya manejamos R1=R2)
        if (distCenters < R_aux - Math2d.EPSILON) {
            console.warn("No hay tangentes exteriores comunes.");
            return [];
        }

        // Construir la circunferencia auxiliar C_aux
        const C_aux = new Circunf2d(P1, R_aux,Math2d.DIR_INVCW);
        const M = MathVector2d.multiplyByScalar(MathVector2d.add(P1, P2), 0.5);
        const C_mid = new Circunf2d(M, distCenters / 2.0,Math2d.DIR_INVCW);
        let T_aux_points: Vector2d[] = MathCircf2d.getInter(C_aux, C_mid);;

        /*
        if (T_aux_points.length < 2) {
            if (T_aux_points.length === 1 && MathFunction2d.isEqual(distCenters, R_aux)) {
                console.warn("Las circunferencias son tangentes internamente.");
            } 
            else {
                console.warn(`dos tangentes exteriores distintas.`);
            }
            return [];
        }
        */
        const T_aux1 = T_aux_points[0];
        const T_aux2 = T_aux_points[1];

        // Calcular las tangentes exteriores comunes
        const vec_dir1_norm = MathVector2d.normalize(MathVector2d.subtract(T_aux1, P1));
        const vec_dir2_norm = MathVector2d.normalize(MathVector2d.subtract(T_aux2, P1));
        const tanP1_L1 = MathVector2d.add(P1, MathVector2d.multiplyByScalar(vec_dir1_norm, R1));
        const tanP2_L1 = MathVector2d.add(P2, MathVector2d.multiplyByScalar(vec_dir1_norm, R2));
        const tanP1_L2 = MathVector2d.add(P1, MathVector2d.multiplyByScalar(vec_dir2_norm, R1));
        const tanP2_L2 = MathVector2d.add(P2, MathVector2d.multiplyByScalar(vec_dir2_norm, R2));
        const tangentLine1 = new Line2d(tanP1_L1, tanP2_L1,Math2d.DIR_INVCW,MathGraphs.DEF_LINE_COLOR);
        const tangentLine2 = new Line2d(tanP1_L2, tanP2_L2,Math2d.DIR_INVCW,MathGraphs.DEF_LINE_COLOR);
        //Math2d.DIR_INVCLOKWISE  
        return [tangentLine1, tangentLine2];
    }

    /**
     * Calculates the center of a circle given three points on its circumference.
     * Throws an error if points are collinear or too close together.
     */
    public static getCircunfCenter(p1: Vector2d, p2: Vector2d, p3: Vector2d): Vector2d {
        const ax = p1[0], ay = p1[1];
        const bx = p2[0], by = p2[1];
        const cx = p3[0], cy = p3[1];

        // --- Calculate the common denominator (d) ---
        const term1_d = ax * (by - cy);
        const term2_d = bx * (cy - ay);
        const term3_d = cx * (ay - by);
        const d = 2 * (term1_d + term2_d + term3_d);

        if (Math.abs(d) < Math2d.EPSILON) {
            throw new Error("Points are collinear or too close together");
        }

        // --- Pre-calculate squared magnitudes for numerator terms ---
        const p1_squared_magnitude = (ax * ax + ay * ay);
        const p2_squared_magnitude = (bx * bx + by * by);
        const p3_squared_magnitude = (cx * cx + cy * cy);

        // --- Calculate numerator for ux (center X-coordinate) ---
        const num_ux_term1 = p1_squared_magnitude * (by - cy);
        const num_ux_term2 = p2_squared_magnitude * (cy - ay);
        const num_ux_term3 = p3_squared_magnitude * (ay - by);
        const ux = (num_ux_term1 + num_ux_term2 + num_ux_term3) / d;

        // --- Calculate numerator for uy (center Y-coordinate) ---
        const num_uy_term1 = p1_squared_magnitude * (cx - bx);
        const num_uy_term2 = p2_squared_magnitude * (ax - cx);
        const num_uy_term3 = p3_squared_magnitude * (bx - ax);
        const uy = (num_uy_term1 + num_uy_term2 + num_uy_term3) / d;

        return [ux, uy];
    }

}//end class
