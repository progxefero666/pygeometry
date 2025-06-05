//src\app\geoeuler2d\scene\scene_a.ts

import { MathCircf2d } from "@/lib/math2d/lib/mathcircf2d";
import { Circunf2d } from "@/lib/math2d/model/circunf2d";
import { Dimension } from "@/lib/common/model/dimension2d";
import { Line2d } from "@/lib/math2d/model/line2d";

import { Vector2d } from "@/lib/types/types";
import { Scene2d } from "@/lib/math2d/modelgroup/scene2d";
import { Docker2d } from "@/lib/math2d/dockers/docker2d";
import { Point2d } from "@/lib/math2d/model/point2d";
import { WebColors } from "@/lib/graph/webcolors";
import { Root2d } from "@/lib/tree2d/model/root2d";
import { Three2d } from "@/lib/tree2d/three2d";
import { Join2d } from "@/lib/tree2d/model/join2d";
import { Math2d } from "@/lib/math2d/math2d";
import { ThreeCircunf2d } from "@/lib/tree2d/model/theecircunf2d";

//MathUnits.toRadians(40)

/**
 * class SceneA
 */
export class SceneA extends Scene2d {

    public parent_position: Vector2d;
    public levels_distances: number[];
    public levels_radius: number[];
    public levels_subdiv: number[];

    public constructor(name: string, dimension: Dimension, description?: string) {
        super(name, dimension, description);

        this.total_steps = 2;

        // init data
        this.parent_position = [0, 0];
        this.levels_subdiv = [4,4,4];
        this.levels_radius = [60, 20, 10];
        this.levels_distances = [0, 110, 60];

        // execute the first step
        this.ejecuteStep_0();
    }

    public ejecuteStep_0(): void {
        this.current_step = 0;

        //level 0
        const root: Root2d = new Root2d(Three2d.TYPE_CIRCUNF, 0, 0, this.levels_radius[0]);

        this.addDocker("docker_0", new Docker2d());
        this.addCircunf("docker_0", "cf_parent_circunf", root.getCircunf2d());

        //level 1
        const root_nodes: Join2d[] = [];

        const list_angles: number[] = Math2d.getListaAnglesFromCero(this.levels_subdiv[0]);
        for (let i = 0; i < list_angles.length; i++) {
            const elem: Join2d = new Join2d(
                Three2d.TYPE_CIRCUNF, 1, this.parent_position,
                this.levels_radius[0], list_angles[i], this.levels_distances[1]);
            root_nodes.push(elem);
        }

        //root.setNodes(root_nodes);
        const listThreeCircunf: ThreeCircunf2d[] = [];
        for (let idx = 0; idx < root_nodes.length; idx++) {
            const elem: ThreeCircunf2d = new ThreeCircunf2d(root_nodes[idx], this.levels_radius[1]);
            listThreeCircunf.push(elem);
            const elem_name: string = "cf_soon_circunf_" + idx;
            this.addCircunf("docker_0", elem_name, elem.getCircunf2d());
            this.addLine("docker_0", elem_name.concat("0"), elem.p_tangents[0]);
            this.addLine("docker_0", elem_name.concat("1"), elem.p_tangents[1]);
        }

        for (let idx = 0; idx < root_nodes.length; idx++) {

            const soons_angles: number[] = Math2d.getListaAnglesFromCero(this.levels_subdiv[1]);
            
            const soons_nodes: Join2d[] = [];
            
            for (let soon_idx = 0; soon_idx < list_angles.length; soon_idx++) {                
                const elem:Join2d = new Join2d(
                    Three2d.TYPE_CIRCUNF,1,listThreeCircunf[idx].position,
                    this.levels_radius[1],soons_angles[soon_idx],this.levels_distances[2]);  
                soons_nodes.push(elem);
            }

            const soons: ThreeCircunf2d[] = [];
            for (let soon_idx = 0; soon_idx < list_angles.length; soon_idx++) { 
                const soon_name: string = idx.toString().concat("_").concat(soon_idx.toString());
                soons[soon_idx] = new ThreeCircunf2d(soons_nodes[soon_idx], this.levels_radius[2]);
                this.addCircunf("docker_0", soon_name, soons[soon_idx].getCircunf2d());
            }
        }

        this.update();
    };//end

    public ejecuteStep_0_old(): void {
        this.current_step = 0;

        //parent
        const parent_circunf: Circunf2d = new Circunf2d(this.parent_position, this.levels_radius[0]);

        //soon0
        const soon0_position: Vector2d = [this.levels_distances[1], 0];
        const soon0_parentline: Line2d = new Line2d(this.parent_position, soon0_position);
        const soon0_circunf: Circunf2d = new Circunf2d(soon0_position, this.levels_radius[1]);
        const soon0_tangents: Line2d[] = MathCircf2d.getCircunfsExtTangents(parent_circunf, soon0_circunf);

        //grandsoon0
        const grandsoon0_angle: number = 0;
        const grandsoon0_position: Vector2d = MathCircf2d
            .getCircunfPoint(soon0_position, this.levels_distances[2], grandsoon0_angle);
        const grandsoon0_parentline: Line2d = new Line2d(soon0_position, grandsoon0_position);
        const grandsoon0_circunf: Circunf2d = new Circunf2d(grandsoon0_position, this.levels_radius[2]);
        const grandsoon0_tangents: Line2d[] = MathCircf2d.getCircunfsExtTangents(soon0_circunf, grandsoon0_circunf);


        this.addDocker("docker_0", new Docker2d());

        this.addPoint("docker_0", "pt_parent_position", new Point2d(this.parent_position));
        this.addPoint("docker_0", "pt_soon0_position", new Point2d(soon0_position));
        this.addPoint("docker_0", "pt_grandsoon0_position", new Point2d(grandsoon0_position));

        this.addLine("docker_0", "ln_soon0_parentline", soon0_parentline);
        this.addLine("docker_0", "ln_grandsoon0_parentline", grandsoon0_parentline);
        this.addLine("docker_0", "ln_soon0_tangent_1", soon0_tangents[0]);
        this.addLine("docker_0", "ln_soon0_tangent_2", soon0_tangents[1]);
        this.addLine("docker_0", "ln_grandsoon0_tangent_1", grandsoon0_tangents[0]);
        this.addLine("docker_0", "ln_grandsoon0_tangent_2", grandsoon0_tangents[1]);
        this.addCircunf("docker_0", "cf_parent_circunf", parent_circunf);
        this.addCircunf("docker_0", "cf_soon0_circunf", soon0_circunf);
        this.addCircunf("docker_0", "cf_grandsoon0_circunf", grandsoon0_circunf);

        this.update();
    }// end of loadInitObjects

    public ejecuteStep_1(): void {
        this.current_step = 1;


    }// end

} // end of class SceneA