//src\app\geoeuler2d\scene\scene_a.ts

import { MathGraphs } from "@/lib/graph/math/mathgraphs";
import { WebColors } from "@/lib/graph/webcolors";
import { Math2d } from "@/lib/math2d/math2d";
import { MathCircf2d } from "@/lib/math2d/mathcircf2d";
import { Circunf2d } from "@/lib/math2d/model/circunf2d";
import { Dimension } from "@/lib/math2d/model/dimension2d";
import { Line2d } from "@/lib/math2d/model/line2d";
import { Point2d } from "@/lib/math2d/model/point2d";
import { GeoEuler2dScene } from "@/lib/math2d/scene/eulerscene";
import { Vector2d } from "@/lib/types/types";


/**
 * class SceneA
 */
export class SceneA extends GeoEuler2dScene {

    public constructor(name: string, dimension:Dimension,description?: string) {
        super(name, dimension, description);

        this.ejecuteStep_1();        
    }

    public ejecuteStep_1(): void {
        this.current_step = 1;

        const circ_a: Circunf2d = new Circunf2d([-50, 50],40,Math2d.DIR_INVCW, MathGraphs.DEF_CF_COLOR);
        const circ_b: Circunf2d = new Circunf2d([80, 50],60,Math2d.DIR_INVCW, MathGraphs.DEF_CF_COLOR);
        const tang:Line2d[]=MathCircf2d.getExternalCommonTangents(circ_a,circ_b)

        this.addCircunference("circ_a", circ_a);
        this.addCircunference("circ_b", circ_b);
        this.addLine("tangent_0", tang[0]);
        this.addLine("tangent_1", tang[1]);

    }// end of loadInitObjects

    public ejecuteStep_2(): void {
        this.current_step = 2;


    }// end

} // end of class SceneA