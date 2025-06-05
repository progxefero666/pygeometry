// src\lib\math2d\mathvector2d.ts

import { Vector2d } from "@/lib/types/types";
import { Math2d } from "../math2d";

/**
 * Clase de utilidades para operaciones matemáticas con vectores 2D.
 * Vector2d = [number, number];
 */
export class MathVector2d {

    public static getVectorRotated(angle: number): Vector2d {
        return [Math.cos(angle),Math.sin(angle)];
    }

    public static getCrossProduct(vector_1: Vector2d, vector_2: Vector2d): number {
        return (vector_1[0] * vector_2[1]) - (vector_1[1] * vector_2[0]);
    }

    public static add(vector_1: Vector2d, vector_2: Vector2d): Vector2d {
        return [vector_1[0] + vector_2[0], vector_1[1] + vector_2[1]];
    }

    public static subtract(vector_1: Vector2d, vector_2: Vector2d): Vector2d {
        return [vector_1[0] - vector_2[0], vector_1[1] - vector_2[1]];
    }

    public static multiplyByScalar(vector: Vector2d, scalar: number): Vector2d {
        return [vector[0] * scalar, vector[1] * scalar];
    }

    public static getDotProduct(vector_1: Vector2d, vector_2: Vector2d): number {
        return (vector_1[0] * vector_2[0]) + (vector_1[1] * vector_2[1]);
    }

    public static getMagnitude(vector: Vector2d): number {
        return Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
    }

    public static normalize(vector: Vector2d): Vector2d {
        const magnitude = MathVector2d.getMagnitude(vector);
        if (magnitude === 0) {
            return [0, 0];
        }
        return [vector[0] / magnitude, vector[1] / magnitude];
    }

}// end of class