import { Dimension } from "@/lib/math2d/model/dimension2d";
import { GeoEuler2dScene } from "@/lib/math2d/scene/eulerscene";
import { SceneA } from "./scene/scene_a";


/**
 * 
 */
export class GeoEuler2dScenes {

    public scenes: GeoEuler2dScene[];
    public scene_A: SceneA | null;

    public constructor(){
        this.scenes = [];
        this.scene_A = null;
        this.chargeScenes();
    }

    public chargeScenes():void{
        this.scene_A = new SceneA("SceneA",GeoEuler2dScene.DEF_DIMENSION);
        this.scenes.push( this.scene_A);
    }
} 