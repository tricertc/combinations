/**
 * Utility methods for working with combinations.
 */

const factorial = require('./factorial');

module.exports = {
  /**
   * Maximum number of combinations for n choose k.
   *   n choose k = nCr = n! / r!(n - r)!
   * 
   * @param {integer} n 
   * @param {integer} k 
   * @returns 
   */
  getMaxCombinations: (n, k) => {
    return Math.floor(factorial(n, n - k + 1) / factorial(k));
  }
}