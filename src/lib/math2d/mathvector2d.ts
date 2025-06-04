// src\lib\math2d\mathvector2d.ts

import { Vector2d } from "@/lib/types/types";
import { Math2d } from "./math2d";

/**
 * Clase de utilidades para operaciones matemáticas con vectores 2D.
 * Vector2d = [number, number];
 */
export class MathVector2d {

    /**
     * CrossProduct (producto vectorial) two vector 2D.
     * El resultado es un escalar que indica la magnitud del "producto vectorial" en 3D
     * y es útil para determinar la orientación relativa de los vectores.
     * @returns {number} El valor escalar del producto cruz.
     */
    public static getCrossProduct(vector_1: Vector2d, vector_2: Vector2d): number {
        // Implementación: (vector_1.x * vector_2.y) - (vector_1.y * vector_2.x)
        return (vector_1[0] * vector_2[1]) - (vector_1[1] * vector_2[0]);
    }

    /**
     * Sum el 2 vector del 1, componente a componente.
     * @returns {Vector2d} new vector.
     */
    public static add(vector_1: Vector2d, vector_2: Vector2d): Vector2d {
        return [vector_1[0] + vector_2[0], vector_1[1] + vector_2[1]];
    }

    /**
     * Rest el 2 vector del 1, componente a componente.
     * @returns {Vector2d} new vector.
     */
    public static subtract(vector_1: Vector2d, vector_2: Vector2d): Vector2d {
        return [vector_1[0] - vector_2[0], vector_1[1] - vector_2[1]];
    }

    /**
     * Multiply vector * escalar(number).
     * @returns {Vector2d} Un nuevo vector escalado.
     */
    public static multiplyByScalar(vector: Vector2d, scalar: number): Vector2d {
        return [vector[0] * scalar, vector[1] * scalar];
    }

    /**
     * DotProduct two vector 2D.
     * @returns {number} El valor escalar del producto punto.
     */
    public static getDotProduct(vector_1: Vector2d, vector_2: Vector2d): number {
        return (vector_1[0] * vector_2[0]) + (vector_1[1] * vector_2[1]);
    }

    /**
     * Magnitude vector 2D.
     */
    public static getMagnitude(vector: Vector2d): number {
        return Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
    }

    /**
     * Normalize vector 2D
     */
    public static normalize(vector: Vector2d): Vector2d {
        const magnitude = MathVector2d.getMagnitude(vector);
        if (magnitude === 0) {
            return [0, 0];
        }
        return [vector[0] / magnitude, vector[1] / magnitude];
    }
}