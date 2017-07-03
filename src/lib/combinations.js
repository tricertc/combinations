/**
 * Utility methods for working with combinations.
 */

const factorial = require('./factorial');
const trailingZeroCount = require('count-trailing-zeros');

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
  },

  /**
   * Get the starting integer in the lexicographical bit sequence
   * for a set size of k.
   * 
   * @param {integer} k 
   */
  getFirst: (k) => {
    if (k === 0) {
      return 0;
    }

    if (k < 0) {
      throw new Error('Number can not be negative.');
    }

    return (1 << k) - 1;
  },

  /**
   * Get the next integer value in lexicographical bit sequence.
   * 
   * @param {integer} n 
   */
  getNext: (n) => {
    if (n === 0) {
      return 0;
    }

    if (n < 0) {
      throw new Error('Number can not be negative.');
    }

    const t = n | (n - 1);
    return (t + 1) | (((~t & -~t) - 1) >> (trailingZeroCount(n) + 1));
  }
}