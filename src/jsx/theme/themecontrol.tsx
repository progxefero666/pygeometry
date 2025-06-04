"use client";

import DaisyUIThemeSelector from "./duithemeselector";
import ThemeToggle from "./themetoggle";

interface ThemeControlProps {
    showFullSelector?: boolean;
    showToggle?: boolean;
    lightTheme?: string;
    darkTheme?: string;
    className?: string;
    layout?: "horizontal" | "vertical";
}

/**
 * Componente unificado para control de temas
 * Puede mostrar selector completo, toggle rápido, o ambos
 */
export default function ThemeControl({
    showFullSelector = true,
    showToggle = true,
    lightTheme = "corporate",
    darkTheme = "dark",
    className = "",
    layout = "horizontal"
}: ThemeControlProps) {

    const containerClass = layout === "horizontal" 
        ? "flex flex-row items-center gap-4" 
        : "flex flex-row  gap-2";

    return (
        <div className={`${containerClass} ${className}`}>
            {showToggle && (
                <div className="flex-row items-center gap-2">
                    <ThemeToggle 
                        lightTheme={lightTheme}
                        darkTheme={darkTheme} />
                </div>
            )}
            
            {showFullSelector && (
                <DaisyUIThemeSelector />
            )}
        </div>
    );
} 