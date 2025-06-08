//src\radix\icons\logo.tsx

import type { SVGProps } from 'react';
import { Sigma } from 'lucide-react';

/**
 * Logo component for Chroma Forge
 * 
 * This component renders the Chroma Forge logo with an icon and text.
 * 
 * @param {SVGProps<SVGSVGElement>} props - SVG properties for customization.
 * @returns {JSX.Element} The logo element.
 */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" aria-label="Chroma Forge Logo">
      <Sigma className="h-7 w-7 text-primary" />
      <span className="text-2xl font-headline font-bold text-foreground">
        Chroma Forge
      </span>
    </div>
  );
  
} //end comp
