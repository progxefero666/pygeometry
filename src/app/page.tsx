//src\app\page.tsx
"use client";

import { useEffect } from "react";

import "@/css/allwidths.css"; 
import { AppUI, useClientReady } from "@/application/appui";
import PageGeoEuler2d from "./geoeuler2d/page";


/**
 * Main app view page component
 * 
 */
export default function Home() {
    
    useEffect(() => {

    }, []);
    

    const clientReady = useClientReady();
    if (!clientReady) { return <div>Loading...</div>; }

    function getRootClassName() {
        const device =window.screen;
        return AppUI.getRootContainerWidthClass(device.width);
    }
  
    const render = () => {
        const mode: number = 0;
        //<PageHeader />
        switch (mode) {
            case 0: return <PageGeoEuler2d />
        }
    };
    return (
        <div id="cont_root" className={getRootClassName()} >            
            {render()}
        </div>
    );

}//end comp
