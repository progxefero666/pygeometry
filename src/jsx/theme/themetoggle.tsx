"use client";

import { useEffect, useState } from "react";
import { DaisyUI } from "@/style/daisyui";

interface ThemeToggleProps {
    lightTheme?: string;
    darkTheme?: string;
    className?: string;
}

/**
 * Toggle rápido para cambiar entre tema claro y oscuro
 */
export default function ThemeToggle({ 
    lightTheme = "corporate", 
    darkTheme = "dark",
    className = ""
}: ThemeToggleProps) {
    const [isDark, setIsDark] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Verificar tema actual
        const savedTheme = localStorage.getItem("daisyui-theme");
        const currentTheme = DaisyUI.getCurrentTheme();
        
        const activeTheme = savedTheme || currentTheme || lightTheme;
        const isCurrentlyDark = activeTheme === darkTheme;
        
        setIsDark(isCurrentlyDark);
        
        // Asegurar que el tema esté aplicado
        applyTheme(isCurrentlyDark ? darkTheme : lightTheme);
    }, [lightTheme, darkTheme]);

    const applyTheme = (themeName: string): void => {
        const htmlElement = document.querySelector("html");
        if (htmlElement) {
            htmlElement.setAttribute("data-theme", themeName);
            localStorage.setItem("daisyui-theme", themeName);
        }
    };

    const toggleTheme = (): void => {
        const newIsDark = !isDark;
        const newTheme = newIsDark ? darkTheme : lightTheme;
        
        setIsDark(newIsDark);
        applyTheme(newTheme);
    };

    // No renderizar hasta que esté en el cliente
    if (!isClient) {
        return (
            <div className={`form-control ${className}`}>
                <input type="checkbox" className="toggle" disabled />
            </div>
        );
    }

    return (
        <div className={`form-control ${className}`}>
            <label className="label cursor-pointer">
                <span className="label-text">🌞</span>
                <input 
                    type="checkbox" 
                    className="toggle toggle-primary mx-2" 
                    checked={isDark}
                    onChange={toggleTheme}
                />
                <span className="label-text">🌙</span>
            </label>
        </div>
    );
} 