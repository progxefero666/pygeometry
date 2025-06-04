//src\jsx\theme\duithemeselector.tsx

"use client";

import { useEffect, useState } from "react";
import { DaisyUI } from "@/style/daisyui";

/**
 * JSX Component for DaisyUI Theme Selector with localStorage persistence
 */
export default function DaisyUIThemeSelector() {
    const [selectedTheme, setSelectedTheme] = useState("corporate");
    const [isClient, setIsClient] = useState(false);

    const themes = DaisyUI.getAllThemes();

    useEffect(() => {
        setIsClient(true);
        
        // Obtener tema guardado o usar el actual del DOM
        const savedTheme = localStorage.getItem("daisyui-theme");
        const currentTheme = DaisyUI.getCurrentTheme();
        
        let themeToUse = "corporate"; // fallback
        
        if (savedTheme && themes.some(t => t.name === savedTheme)) {
            themeToUse = savedTheme;
        } else if (currentTheme && currentTheme !== "default-theme") {
            themeToUse = currentTheme;
        }
        
        // Aplicar el tema
        applyTheme(themeToUse);
        setSelectedTheme(themeToUse);
    }, []);

    const applyTheme = (themeName: string): void => {
        const htmlElement = document.querySelector("html");
        if (htmlElement) {
            htmlElement.setAttribute("data-theme", themeName);
            localStorage.setItem("daisyui-theme", themeName);
        }
    };
      
    const onThemeSelected = (themeName: string): void => {
        applyTheme(themeName);
        setSelectedTheme(themeName);
    };

    // No renderizar hasta que esté en el cliente para evitar hidration mismatch
    if (!isClient) {
        return (
            <select className="select select-bordered w-full max-w-xs" disabled>
                <option>Cargando temas...</option>
            </select>
        );
    }
        
    return (
        <div className="form-control w-full max-w-xs">
            <select 
                className="select select-bordered w-full"
                value={selectedTheme}
                onChange={(e) => onThemeSelected(e.target.value)} >    
                {themes.map((theme) => (
                    <option key={theme.name} value={theme.name}>
                        {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}

/*
"use client";

import { DaisyUI } from "@/common/style/daisyui";
import { useEffect, useState } from "react";

export default function DaisyThemeSelector() {
    const [selectedTheme, setSelectedTheme] = useState("");

    const themes = DaisyUI.getAllThemes();

    useEffect(() => {
        // Obtener el tema actual al cargar el componente
        const currentTheme = DaisyUI.getCurrentTheme();
        setSelectedTheme(currentTheme);
    }, []);

    useEffect(() => {
        // Actualizar el tema en el DOM cuando cambie el estado
        document.documentElement.setAttribute("data-theme", selectedTheme);
    }, [selectedTheme]);

    const onThemeSelected = (themeName: string): void => {
        if (themes.some((theme) => theme.name === themeName)) {
            setSelectedTheme(themeName);
        } else {
            console.warn(`El tema "${themeName}" no es válido.`);
        }
    };

    return (
        <select
            className="select select-bordered w-full max-w-xs"
            value={selectedTheme}
            onChange={(e) => onThemeSelected(e.target.value)}
        >
            <option value="" disabled>
                Choose theme
            </option>
            {themes.map((theme) => (
                <option key={theme.name} value={theme.name}>
                    {theme.name}
                </option>
            ))}
        </select>
    );
}
*/