import { Formula } from './Formula';
import { FastNode } from './FastNode';
import { FastPotential } from './FastPotential';
import { FormulaId } from './common';
declare type MaybeFastPotential = FastPotential | null;
/**
 * Evaluate the formula for taking the product of one or more potentials.  This function is
 * called by "evaluate" to handle the FormulaType.PRODUCT data case.   This function is O(n)
 * in the number of elements of the resulting potential.
 * @param factorsPotentials - the potential functions for the factors
 * @param factorsDomains - An array of the domains of each of the factors
 * @param factorNumberOfLevels - An array of the number of levels in each of a factor's domain variables
 * @param productDomain - The domain of the product
 * @param productNumberOfLevels -The number of levels in each of the product's domain variables
 * @param productSize - the number of rows in the product's cpt.  This should be the product of the
 *   number of levels.
 * NOTE: This function is pure, and does not make any changes to the nodes, formulas or potentials.
 *
 * @example: The product of two potentials A and B prior to normalization is exemplified
 *  below:
 *
 *   | A   |     |     | B   |     |   |  A  |  B  |           |
 *   | --- | --- |     | --- | --- |   | --- | --- | --------- |
 *   |  a1 | 0.7 |  x  | b1  | 0.4 | = |  a1 |  b1 | 0.7 * 0.4 |
 *   |  a2 | 0.2 |     | b2  | 0.6 |   |  a2 |  b1 | 0.2 * 0.4 |
 *   |  a3 | 0.1 |                     |  a3 |  b1 | 0.1 * 0.4 |
 *                                     |  a1 |  b2 | 0.7 * 0.6 |
 *                                     |  a2 |  b2 | 0.2 * 0.6 |
 *                                     |  a3 |  b2 | 0.1 * 0.6 |
 */
export declare const evaluateProductPure: (factorPotentials: FastPotential[], factorDomains: number[][], factorNumberOfLevels: number[][], productDomain: number[], productNumberOfLevels: number[], productSize: number) => FastPotential;
/**
 * Marginalize a potential function directly (no formulas).  This function is called by "evaluate"
 * to handle the FormulaType.MARGINAL data case.   This function is O(n) in the number of
 * elements of the original potential.
 * @param innerPotential - the potential function to marginalize
 * @param innerDomain - the domain of the potential function being marginalized
 * @param innerNumberOfLevels - The number of levels of each of the variables occuring in the
 *   domain of the inner potential
 * @param marginalDomain - the domain of the potential function after marginalization.   It
 *   must contain a distinct subset of the elements of the inner potential function's domain
 *   but can be in any order.
 * @param marginalNumberOfLevels - the number of levels in each of the variables occuring in the
 *   domain of the marginal.
 * @param marginalSize - The number of elements in the CPT of the potential function.   This should
 *   be the product of the marginalNumberOfLevels.
 * NOTE: This function is pure, and does not mutate any of the formulas or potentials.
 *
 * @example: The result of marginalization of a potential over {B} prior to normalization
 *  is exemplified below:
 *
 *        |  A  |  B  |           |    | A   |                   |
 *  ----  | --- | --- | --------- |    | --- | ----------------- |
 *  \     |  a1 |  b1 | 0.7 * 0.4 |    |  a1 | 0.7 * (0.4 + 0.6) |
 *    \   |  a2 |  b1 | 0.2 * 0.4 |    |  a2 | 0.2 * (0.4 + 0.6) |
 *    /   |  a3 |  b1 | 0.1 * 0.4 |  = |  a3 | 0.1 * (0.4 + 0.6) |
 *  /     |  a1 |  b2 | 0.7 * 0.6 |
 *  ----  |  a2 |  b2 | 0.2 * 0.6 |
 *    {B} |  a3 |  b2 | 0.1 * 0.6 |
 *
 */
export declare function evaluateMarginalPure(innerPotential: FastPotential, innerDomain: number[], innerNumberOfLevels: number[], marginalDomain: number[], marginalNumberOfLevels: number[], marginalSize: number): FastPotential;
/**
 * Recursively evaluate a formula for a potential.
 * @param marginalFormula - the symbolic representation of the marginal being evaulated
 * @param nodes - The collection of nodes in the inference engine.  This is used to
 *   locate locate nodes in the domain of the marginal and comprehend their properties
 * @param formulas - A list containing the symbolic representation of the potential functions
 *   of each clique, potential and term that occurs in the Bayes network.   This is used for
 *   evaluating the potential that is being marginalized
 * @param potentials - The collection of potentials corresponding to possibly cached results
 *   of evaluting the given list of formulas.  The list of potentials and list of formulas
 *   share the same ordering scheme such that the first potential corresponds to the cached
 *   result of evaluating the first potential, and so on.
 * NOTE: If this function computes a new value for the given formula or any of its terms,
 *   it will mutate the cache of potentials to update the cached values.
 */
export declare const evaluate: (formulaId: FormulaId, nodes: FastNode[], formulas: Formula[], potentials: MaybeFastPotential[]) => FastPotential;
export {};
