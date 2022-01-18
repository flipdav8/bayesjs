import { FastPotential } from './FastPotential';
import { ICptWithParents, ICptWithoutParents } from '../types';
/** A Distribution represents a joint distribution of one (trivially) or more
   * "head" variables, optionally conditioned upon one or more parent variables.
   */
export declare class Distribution {
    private _potentialFunction;
    private _variableNames;
    private _variableLevels;
    private _numberOfHeadVariables;
    /** construct a new probability distribution for a collection
     * of head variables and parent variables, and an optional
     * potential function.   If no potential function is provided,
     * then the uniform distribution is assumed.
     * @param headVariables - the head variables over which the joint
     *   distribution will be constructed
     * @param parentVariables - the optional list of parent variables
     *   upon which the distribution will be conditionally dependent.
     * @param potentialFunction - an optional fast potential containing
     *   the liklihood of each outcome.
     */
    constructor(headVariables: {
        name: string;
        levels: string[];
    }[], parentVariables: {
        name: string;
        levels: string[];
    }[], potentialFunction?: FastPotential);
    /** Test if the distribution has a head variable with the given name.
     * @param name: the name of the head variable to test
     */
    hasHeadVariable(name: string): boolean;
    /** Get a head variable given its name.
     * @param name: The variable to get from the distribution
     * @returns an object containing the name of the variable and
     *   its levels.
     * @throws: whenever the variable does not exist in the distribution
     *   this function will throw an error.   Call "hasHeadVariable" prior
     *   to calling this function to ensure that the variable exists.
     */
    getHeadVariable(name: string): {
        name: string;
        levels: string[];
    };
    /** Get all the head variables from a distribution.
     * @returns an array of objects where each element provides the name of a head variable and
     *   its levels.
     */
    getHeadVariables(): {
        name: string;
        levels: string[];
    }[];
    /** Test if the distribution has a parent variable with the given name.
     * @param name: the name of the parent variable to test
     */
    hasParentVariable(name: string): boolean;
    /** Get a parent variable given its name.
     * @param name: The variable to get from the distribution
     * @returns an object containing the name of the variable and
     *   its levels.
     * @throws: whenever the variable does not exist in the distribution
     *   this function will throw an error.   Call "hasParentVariable" prior
     *   to calling this function to ensure that the variable exists.
     */
    getParentVariable(name: string): {
        name: string;
        levels: string[];
    };
    /** Get all the parent variables from a distribution.
     * @returns an array of objects where each element provides the name of a parent variable and
     *   its levels.
     */
    getParentVariables(): {
        name: string;
        levels: string[];
    }[];
    /** Remove a variable from the distribution by marginalizing.
     * @param name - the name of the variable to remove
     * @throws If the variable being removed is the last head variable
     *   in the distribution, this function will throw an error.
     * NOTE: If the variable does not exist in either the head or
     *   parent variables, then the requested removal will have no
     *   effect.
     */
    removeVariable(name: string): void;
    /** Remove a level from a variable in the given distribution.
     * @param name - the name of the variable from which the level will be removed
     * @param level - the level to remove from the variable
     * @throws - if the level is the last level for the variable, this function
     *   will throw an error.
     * NOTE: if the variable or level do not exist, then this function will
     *   have no effect, otherwise, the level will be removed and the potential
     *   function normalized to ensure that it still sums to unity.
     */
    removeLevel(name: string, level: string): void;
    /** Rename a variable in the probability distribution.  This function
     * has no effect on the probability distribution.
     * @param oldName: The old name of the variable
     * @param newName: The new name for the variable
     * @throws: if the old variable name does not exist, or if the new
     *   variable name already exists, then this function will throw an
     *   error.
     */
    renameVariable(oldName: string, newName: string): void;
    /** Rename a level of a variable in the given distribution.  This function
     * has no effect on the probability distribution.
     * @param name: The name of the variable
     * @param oldLevel: The old level
     * @param newLevel: The new level
     * @throws: if the variable does not exist, the old level does not exist or if the new
     *   level name already exists, then this function will throw an
     *   error.
     */
    renameLevel(name: string, oldLevel: string, newLevel: string): void;
    getPotentials(): number[];
    setPotentials(potentials: FastPotential): void;
    /** Add a head variable to distribution.  This function will add the
     * variable in such a way that the marginal distribution of the
     * variable will be uniform, and the removal of the variable recovers
     * the original potential function.
     * @param name: The name of the variable
     * @param levels: A non-empty list of levels for the variable
     * @throws: if a variable with the name already exists, or if the
     *   list of levels is empty, this function will throw an error.
     */
    addHeadVariable(name: string, levels: string[]): void;
    /** Add a parent variable to distribution.  This function will add the
     * variable in such a way that the marginal distribution of the
     * variable will be uniform, and the removal of the variable recovers
     * the original potential function.
     * @param name: The name of the variable
     * @param levels: A non-empty list of levels for the variable
     * @throws: if a variable with the name already exists, or if the
     *   list of levels is empty, this function will throw an error.
     */
    addParentVariable(name: string, levels: string[]): void;
    /** Add a level to a variable.  The potential assigned to any
     * effect or event having the new level will be diminishingly
     * small.
     * @param name: The name of the variable
     * @param level: the new level to add to the distribution
     * @throws: if a variable with the name does not exist, or if the
     *   level already exists, this function will throw an error.
     */
    addLevel(name: string, level: string): void;
    /** Infer the probability of an event conditioned upon hard evidence for its
     * parent variables.
     * @param event - a mapping from the head variables to an outcome level.   At least
     *   one level must be provided for each head variable.  When more than one level is
     *   provided, then the cumulative probability will be returned
     * @param evidence - a mapping from the parent variables to their hard evidence.
     *   At least one level must be provided for each parent variable.   When more than
     *   one level is provided, then the evidence is treated as soft evidence for that
     *   parent variable.
     * @returns the joint probability of observing the given event subject to the
     *   evidence.
     * @throws If the caller does not provide event level for each head variable
     *   or hard evidence for each parent variable then this function will throw
     *   an error.
    */
    infer(event: {
        [name: string]: string[];
    }, evidence?: {
        [name: string]: string[];
    }): number;
    toJSON(): {
        potentialFunction: FastPotential;
        variableLevels: string[][];
        variableNames: string[];
        numberOfHeadVariables: number;
    };
    describe(): string;
}
export declare function fromCPT(name: string, parentNames: string[], levels: string[][], cpt: ICptWithParents | ICptWithoutParents): Distribution;
