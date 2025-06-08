//src\app\geoeuler2d\page.tsx
"use client";


import { QdrantClient } from '@qdrant/js-client-rest';

import { useEffect, useRef, useState, ChangeEvent } from "react";
import { ButtonsColors, ThemeColors } from "@/style/apptheme";
import { Dimension } from "@/lib/common/model/dimension2d";
import { InputRange, InputRangeRef } from "@/jsx/form/inputrange";
import { AppUI, useClientReady } from "@/application/appui";
import { XButtonIcon } from "@/jsx/button/iconbutton";
import { InputNumber } from "@/jsx/form/inputnumber";
import { WebColors } from "@/lib/graph/webcolors";
import ThemeControl from "@/jsx/theme/themecontrol";
import { ControlCanvas } from "./ctrlcanvas";
import { Figure2d } from "@/lib/math2d/modelgroup/figure2d";
import { MathFigure2dGen } from "@/lib/math2d/lib/mathfig2dgen";
import { Scene2d } from "@/lib/math2d/modelgroup/scene2d";
import { SceneA } from "./scene/scene_a";

// view:css
import "@/css/allwidths.css";
import "@icon/themify-icons/themify-icons.css";
import { UiPaginator } from "@/jsx/util/paginator";
import { PaginatorData } from "@/lib/common/util/paginatordata";
import { PaginatorUtil } from "@/lib/common/util/paginatorutil";

let ctrCanvas: ControlCanvas | null = null;

export default function PageGeoEuler2d() {
    //const listScenes = useRef<GeoScenes>(scenes);
    const [paginatorData, setPaginatorData] = useState<PaginatorData | null>(null);
    const [canvasDimension, setCanvasDimension] = useState<Dimension>(AppUI.DEF_CANVAS_DIMENSION);
    const [isCanvasInitialized, setIsCanvasInitialized] = useState(false);
    const canvasContRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const cvPlayerRange = useRef<InputRangeRef>(null);

    useEffect(() => {
        if (!canvasRef.current) { return; }
        if (!isCanvasInitialized) {
            ctrCanvas = new ControlCanvas(canvasRef.current!, canvasDimension, WebColors.COLOR_BLACK);
            chargeScene();
            setIsCanvasInitialized(true);
        }
    });

    //.........................................................................
    const chargeScene = (): void => {
       const scene_A = new SceneA("SceneA",Scene2d.DEF_DIMENSION);
       ctrCanvas!.renderScene(scene_A);
       setPaginatorData(scene_A.paginatorData);
    }

    const executeActionBar = async (operation: string) => {
    }
    //.........................................................................

    const onPlayerRangeChange = (name: string, result: unknown) => {
    }

    const executeFilterUICollection = (opQueryId: string) => {
      
    }    
    
    const chargeGraph = (): void => {
        const figure: Figure2d = MathFigure2dGen.genFigureModelA([0, 0], 150, WebColors.COLOR_GREEN);
        //ctrCanvas!.renderFigure(figure.radius,figure.color,curves);
    }

    const clientReady = useClientReady();
    if (!clientReady) { return <div>Loading...</div>; }

    const getRootClassName = () => {
        //const device = window.screen;
        const device = AppUI.getBrowserDimension();
        return AppUI.getRootContainerWidthClass(device.width);
    }

    return (
        <div id="cont_root" className={getRootClassName()}>

            <div className="w-full h-auto mb-2 border flex-row px-2 py-2">
                <ThemeControl showFullSelector={true}
                    showToggle={true}
                    layout="vertical"
                    className="w-full" />
            </div>

            <div className="w-full h-auto grid grid-cols-[34%_1%_65%]">

                {/* left colum ................................................................... */}
                <div className="min-h-[566px] max-h-[566px] flex flex-col border p-2 gap-y-2">
                    {/*
                    <InputSelect name="scenes"
                        classname="w-full"
                        defaultvalue={listScenes.current.getSceneChargedName()}
                        collection={listScenes.current.getListNames()} />                    
                    
                    */}


                    <InputRange name="playRange"
                        ref={cvPlayerRange}
                        defaultvalue={0}
                        step={1}
                        min={0} max={20}
                        onchange={onPlayerRangeChange} />

                    <InputNumber name="row_index"
                        defaultvalue={12}
                        minvalue={2}
                        maxvalue={80}
                        classname="w-[60px]" />
                </div>

                <div>
                </div>

                {/* right colum ................................................................... */}
                <div className="w-full h-auto flex flex-col ">

                    <div className="w-full h-auto border bg-white mb-2 px-[6px] py-2 flex space-x-2">
                        <XButtonIcon
                            callback={executeActionBar} operation="generate"
                            btncolor={ButtonsColors.INFO_CONTENT}
                            btnsize="md"
                            iconname="pulse"
                            iconsize={"md"}
                            iconcolor="black" btntext="generate" />
                        <UiPaginator
                            data={paginatorData}
                            onPagePrevious={() => executeFilterUICollection(PaginatorUtil.OPID_LOADPREVPAGE)}
                            onPageNext={() => executeFilterUICollection(PaginatorUtil.OPID_LOADNEXTPAGE)} />                            
                    </div>

                    <div className="h-[500px] w-full items-center justify-center"
                        ref={canvasContRef}>
                        <canvas
                            ref={canvasRef}
                            width={canvasDimension.width}
                            height={canvasDimension.height}
                            className="border border-black bg-black" />
                    </div>
                    <div className="h-auto mt-[8px] bg-green-250 border w-full items-center justify-center">

                    </div>
                </div>

            </div>

        </div>
    );

}//end function

