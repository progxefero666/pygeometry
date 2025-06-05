import { Dimension } from "@/lib/common/model/dimension2d";
import { Scene2d } from "@/lib/math2d/modelgroup/scene2d";
import { SceneA_old } from "./scene/scene_a_old";
import { DdConstants } from "@/lib/common/ddconstants";
import { GeoEuler2dScene_old } from "@/lib/math2d/model/eulerscene_old";


/**
 * class GeoScenes
 */
export class GeoScenes {

    public scenes: GeoEuler2dScene_old[];
    public scene_index: number = 0;
    public scene_charged: GeoEuler2dScene_old | null = null;
    public scene_A: SceneA_old | null = null;

    public constructor(){
        this.scenes = [];
        this.chargeScenes();
    }

    public chargeScenes():void{
        this.scene_A = new SceneA_old("SceneA",Scene2d.DEF_DIMENSION);
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