import { INetworkResult, IInferAllOptions } from '.';
import { Distribution } from '../engines';
/**
 * An inference engine is a self contained structure for performing inferences on
 * Bayesian Networks.   Classes that implement this interface can provide specific
 * optimizations (e.g. caches, partial updates, lazy evaluation) to facilitate
 * efficient repeated inferences.    Once instanciated, any implementation of this
 * interface must be mutable only via the provided functions.   This ensures that
 * any internally cached values will remain consistent.
 */
export interface IInferenceEngine {
    hasVariable: (name: string) => boolean;
    getVariables: () => string[];
    getParents: (name: string) => string[];
    hasParent: (name: string, parent: string) => boolean;
    getLevels: (name: string) => string[];
    hasLevel: (name: string, level: string) => boolean;
    setDistribution: (distribution: Distribution) => void;
    getDistribution: (name: string) => Distribution;
    hasEvidenceFor: (name: string) => boolean;
    setEvidence: (evidence: {
        [name: string]: [string];
    }) => void;
    updateEvidence: (evidence: {
        [name: string]: [string];
    }) => void;
    removeEvidence: (name: string) => void;
    removeAllEvidence: () => void;
    infer: (event: {
        [name: string]: string[];
    }) => number;
    inferAll: (options?: IInferAllOptions) => INetworkResult;
}
