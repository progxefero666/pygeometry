// src\lib\model\base\point2d.ts

import { Vector2d } from "@/lib/types/types";
import { WebColors } from "../webcolors";

export class GrPoint2d {

    public static DEF = [0,0] as Vector2d;

    public color: string;
    public x: number = 0;
    public y: number = 0;
    public coord: Vector2d;

    constructor(coord: Vector2d, color?: string) {
        this.coord = coord;
        this.x = coord[0];
        this.y = coord[1];
        this.color = color || WebColors.COLOR_WHITE;
    }

    getCloned(): GrPoint2d {
        return new GrPoint2d(this.coord);
    }

    // move to
    move(newX: number, newY: number): void {
        this.x = newX;
        this.y = newY;
    }

    // distance to
    distanceTo(other: Vector2d): number {
        const dx = this.coord[0]- other[0];
        const dy = this.coord[1] - other[1];
        return Math.sqrt(dx * dx + dy * dy);
    }


    // json format
    toString(): string {
        return `(${this.coord[0]}, ${this.coord[1]})`;
    }

}