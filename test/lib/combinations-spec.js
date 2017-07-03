const expect = require('expect');
const combinations = require('../../src/lib/combinations');

describe('Combinations utility', () => {
  describe('getMaxCombinations(n, k)', () => {
    it('should determine the maximum number of combinations for n choose k', () => {
      const samples = [
        { n: 5,  k: 2, expectedResult: 10 },
        { n: 32, k: 4, expectedResult: 35960 }
      ];

      for (let i = 0; i < samples.length; i++) {
        let sample = samples[i];
        let result = combinations.getMaxCombinations(sample.n, sample.k);

        expect(result).toBe(sample.expectedResult);
      }
    });
  });
});