import { Dimension } from "@/lib/math2d/model/dimension2d";
import { GeoEuler2dScene } from "@/lib/math2d/scene/eulerscene";
import { SceneA } from "./scene/scene_a";
import { DdConstants } from "@/lib/common/ddconstants";


/**
 * class GeoScenes
 */
export class GeoScenes {

    public scenes: GeoEuler2dScene[];
    public scene_index: number = 0;
    public scene_charged: GeoEuler2dScene | null = null;
    public scene_A: SceneA | null = null;

    public constructor(){
        this.scenes = [];
        this.chargeScenes();
    }

    public chargeScenes():void{
        this.scene_A = new SceneA("SceneA",GeoEuler2dScene.DEF_DIMENSION);
        this.scenes.push( this.scene_A);

        this.scene_charged = this.scenes[this.scene_index];
    }

    public selectScene(index:number):void{
        this.scene_index = index;
        this.scene_charged = this.scenes[this.scene_index];
    }   

    public getSceneChargedName():string{
        return this.scene_charged!.name;
    }

    public getListNames():string[]{
        return this.scenes.map(scene => scene.name);
    }

} //end class// end of class GeoEuler2dScenes