# Project Folder Structure and Code

---

## Directory Tree for "lib"


Listado de rutas de carpetas
El n�mero de serie del volumen es F812-5300
C:\NEXT\APPS\GEOMETRY\SRC\LIB
+---math2d
|       math2d.ts
|       mathfunc2d.ts
|       mathvector2d.ts
|       
+---model
|   \---base
|           line2d.ts
|           point2d.ts
|           
\---types
        types.ts
        

---

## File Contents from "lib"


---
### File: C:\next\apps\geometry\src\lib\math2d\math2d.ts

```


/**
 * Math2d class 
 */
export class Math2d {

    public static readonly EPSILON = 1e-10;

} //end class```

---
### File: C:\next\apps\geometry\src\lib\math2d\mathfunc2d.ts

```
//src\lib\math2d\mathfunc2d.ts

import { Math2d } from "./math2d";

/**
 * class MathFunction2d
 */
export class MathFunction2d {


    public static isEqual(a: number, b: number): boolean {
        return Math.abs(a - b) < Math2d.EPSILON;
    }

    public static isZero(value: number): boolean {
        return MathFunction2d.isEqual(value, 0);
    }

    public static isPointOnLine(point: [number, number], lineStart: [number, number], lineEnd: [number, number]): boolean {
        const crossProduct = (point[1] - lineStart[1]) * (lineEnd[0] - lineStart[0]) - (point[0] - lineStart[0]) * (lineEnd[1] - lineStart[1]);
        return MathFunction2d.isZero(crossProduct);
    }
    
} //end class```

---
### File: C:\next\apps\geometry\src\lib\math2d\mathvector2d.ts

```
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
}```

---
### File: C:\next\apps\geometry\src\lib\model\base\line2d.ts
.
```
// src\lib\model\base\line2d.ts
import { Vector2d } from "@/lib/types/types";

/**
 * class Line2d
 */
export class Line2d {

    public point_0:Vector2d=[0, 0];
    public point_1:Vector2d=[0, 0];

    constructor(point_0: Vector2d, point_1: Vector2d) {
        this.point_0 = point_0;
        this.point_1 = point_1;
    }

} // end class```
.
---
### File: C:\next\apps\geometry\src\lib\model\base\point2d.ts
.
```
// src\lib\model\base\point2d.ts

export class Point2d {

    public static DEF = new Point2d(0, 0);

    public x: number = 0;
    public y: number = 0;
    public coord: [number, number] = [0, 0];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.coord = [x, y];
    }

    getCloned(): Point2d {
        return new Point2d(this.x, this.y);
    }

    // move to
    move(newX: number, newY: number): void {
        this.x = newX;
        this.y = newY;
    }

    // distance to
    distanceTo(other: Point2d): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    //clone
    clone(): Point2d {
        return new Point2d(this.x, this.y);
    }

    // json format
    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

}```
.
---
### File: C:\next\apps\geometry\src\lib\types\types.ts
.
```
//src\types\types.ts
export type Vector2d = [number, number];
export type Vector3d = [number, number, number];
export type Vector4d = [number, number, number, number];```
.
