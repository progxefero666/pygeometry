//src\lib\math2d\mathpoligon2d.ts

import { Vector2d } from "../../types/types";


/**
 * class MathPoligon2d
 */
export class MathPoligon2d {

    public static getAreaOfPolygon(points: Vector2d[]): number {
        let area = 0;
        const n = points.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n; // wrap around to the first point
            area += points[i][0] * points[j][1];
            area -= points[j][0] * points[i][1];
        }
        return (Math.abs(area) / 2);
    }

    public static getPolygonPerimeter(polygon: Vector2d[]): number {
        let perimeter = 0;
        const n = polygon.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n; // wrap around to the first point
            const dx = polygon[j][0] - polygon[i][0];
            const dy = polygon[j][1] - polygon[i][1];
            perimeter += Math.sqrt(dx * dx + dy * dy);
        }
        return perimeter;
    }

    public static isPointInsidePolygon(point: Vector2d, polygon: Vector2d[]): boolean {
        let inside = false;
        const n = polygon.length;

        for (let i = 0, j = n - 1; i < n; j = i++) {
            const xi = polygon[i][0], yi = polygon[i][1];
            const xj = polygon[j][0], yj = polygon[j][1];
            const intersect = ((yi > point[1]) !== (yj > point[1])) &&
                              (point[0] < (xj - xi) * (point[1] - yi) / (yj - yi) + xi);
            if (intersect) {inside = !inside;}}
        return inside;
    }

    public static getCentroidOfPolygon(polygon: Vector2d[]): Vector2d {
        let x = 0, y = 0;
        const n = polygon.length;
        for (const point of polygon) {
            x += point[0];
            y += point[1];
        }
        return [x / n, y / n];
    }
    
    public static getBoundingBox(polygon: Vector2d[]): { min: Vector2d, max: Vector2d } {
        if (polygon.length === 0) {return { min: [0, 0], max: [0, 0] };}
        let minX = polygon[0][0], minY = polygon[0][1];
        let maxX = polygon[0][0], maxY = polygon[0][1];
        for (const point of polygon) {
            if (point[0] < minX) minX = point[0];
            if (point[1] < minY) minY = point[1];
            if (point[0] > maxX) maxX = point[0];
            if (point[1] > maxY) maxY = point[1];
        }
        return { min: [minX, minY], max: [maxX, maxY] };
    }    

}//end class