/**
 * Calculate the factorial of n.
 * 
 * @param {integer} n 
 * @returns 
 */
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Calculates a partial factorial.
 *   ex: partialFactorial(32, 29) calculates 32 * 31 * 30 * 29
 * 
 * @param {integer} n The number.
 * @param {integer} s The stop value.
 * @returns 
 */
function partialFactorial(n, s) {
  if (n == s) {
    return s;
  }
  return n * partialFactorial(n - 1, s);
}

/**
 * Handles factorial and partial factorial calculations.
 *   ex: factorial(6)    = 6 * 5 * 4 * 3 * 2 * 1 = 720
 *       factorial(6, 4) = 6 * 5 * 4             = 120
 * 
 * @param {integer} n The number.
 * @param {integer} s The stop value.
 * @returns 
 */
module.exports = (n, s) => {
  if (n < 0) {
    return undefined;
  }

  if (s === undefined) {
    return factorial(n);
  }

  if (s < 0) {
    throw new Error('Stop value can not be negative.');
  }

  if (s > n) {
    throw new Error('Stop value can not be greater than n.');
  }

  return partialFactorial(n, s);
};

