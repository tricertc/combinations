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

  describe('getFirst(k)', () => {
    it('should return the initial lexicographical sequence for a set size', () => {
      const samples = [
        { k: 1, expectedResult: 1 },  // 00001
        { k: 2, expectedResult: 3 },  // 00011
        { k: 3, expectedResult: 7 },  // 00111
        { k: 4, expectedResult: 15 }, // 01111
        { k: 5, expectedResult: 31 }  // 11111
      ];

      for (let i = 0; i < samples.length; i++) {
        let sample = samples[i];
        let result = combinations.getFirst(sample.k);

        expect(result).toBe(sample.expectedResult);
      }
    });

    it('should return 0 when nkis 0', () => {
      const result = combinations.getFirst(0);
      expect(result).toBe(0);
    });

    it('should throw an exception when k is a negative integer', () => {
      expect(() => combinations.getFirst(-1)).toThrow(Error);
    });
  });

  describe('getNext(n)', () => {
    it('should return the next value in lexicographical bit sequence', () => {
      const samples = [                // 00011
        { n: 3, expectedResult: 5 },   // 00101
        { n: 5, expectedResult: 6 },   // 00110
        { n: 6, expectedResult: 9 },   // 01001
        { n: 9, expectedResult: 10 },  // 01010
        { n: 10, expectedResult: 12 }, // 01100
        { n: 12, expectedResult: 17 }, // 10001
        { n: 17, expectedResult: 18 }, // 10010
        { n: 18, expectedResult: 20 }, // 10100
        { n: 20, expectedResult: 24 }, // 11000
      ];

      for (let i = 0; i < samples.length; i++) {
        let sample = samples[i];
        let result = combinations.getNext(sample.n);

        expect(result).toBe(sample.expectedResult);
      }
    });

    it('should throw an exception when n is a negative integer', () => {
      expect(() => combinations.getNext(-1)).toThrow(Error);
    });
  });
});