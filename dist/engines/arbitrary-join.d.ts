import { FastPotential } from './FastPotential';
import { FastClique } from './FastClique';
import { Formula } from './Formula';
import { FastNode } from './FastNode';
export declare function arbitraryJoin(nodes: FastNode[], cliques: FastClique[], separators: number[][], formulas: Formula[], potentialFunctions: (FastPotential | null)[], headVariables: number[], parentVariables: number[]): FastPotential;
