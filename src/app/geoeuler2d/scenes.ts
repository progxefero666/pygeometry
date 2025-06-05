import { Dimension } from "@/lib/common/model/dimension2d";
import { Scene2d } from "@/lib/math2d/modelgroup/scene2d";
import { SceneA_old } from "./scene/scene_a_old";


/**
 * 
 */
export class GeoEuler2dScenes {

    public scenes: Scene2d[];
    public scene_A: SceneA_old | null;

    public constructor(){
        this.scenes = [];
        this.scene_A = null;
        this.chargeScenes();
    }

    public chargeScenes():void{
        this.scene_A = new SceneA_old("SceneA",Scene2d.DEF_DIMENSION);
        this.scenes.push( this.scene_A);
    }
} 