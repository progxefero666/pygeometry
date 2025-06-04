
import { create, all, sqrt, MathJsInstance, Matrix } from 'mathjs';

const config = {
  matrix: 'Matrix' as const, 
  number: 'number' as const
};

export const MathJs = create(all, config) as MathJsInstance;
export type MathType = typeof MathJs;


