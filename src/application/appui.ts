//src\application\appui.ts

import { Dimension } from "@/lib/math2d/model/dimension2d";
import { useState, useEffect } from "react";

export function useClientReady() {
    const [clientReady, setClientReady] = useState(false);
    useEffect(() => {
        setClientReady(true);
    }, []);
    return clientReady;
}

/**
 * class AppUI.DEF_CANVAS_DIMENSION
 */
export class AppUI {

    public static readonly DEF_CANVAS_DIMENSION: Dimension = new Dimension(512, 512)

    //const device = window.screen;
    public static getBrowserDimension(): Dimension {
        if (!window.innerWidth || !window.innerHeight) {
            return new Dimension(0, 0);
        }
        return new Dimension(window.innerWidth, window.innerHeight);
    }
    public static getWindowDimension(): Dimension {
        if (!window.innerWidth || !window.innerHeight) {
            return new Dimension(0, 0);
        }
        return new Dimension(window.screen.pixelDepth, window.screen.height);
    }

    public static getRootContainerWidthClass(deviceWidth: number): string {
        const widthreduced = Math.floor((deviceWidth / 100) * 65);
        const closestWidth = Math.min(1536, Math.floor(widthreduced / 10) * 10);
        return `w${Math.max(640, closestWidth)}`;
    }

}// end class AppUI

export class AppUIButtons {

  public static readonly DEF_SIZE:string = "md";

  public static getSizeClassName(size: string): string {
    return "btn-".concat(size);
}

  public static getButtonClass(color:string,size: string): string {

    let btnsize: string = AppUIButtons.DEF_SIZE;
    if (size) {btnsize = size;}
    
    let btnSizeClass: string = AppUIButtons.getSizeClassName(size);

    let btnclass = "btn ".concat(btnSizeClass);
    if (color) {
        btnclass += " ".concat(color);
    }
    btnclass += " gap-2";

    return btnclass;
}

} //end class