const expect = require('expect');
const factorial = require('../../src/lib/factorial');

describe('Factorial utility', () => {
  it('should return undefined for a negative integer', () => {
    const result = factorial(-1);
    expect(result).toBe(undefined);
  });

  it('should calculate the factorial of an unsigned integer', () => {
    const samples = [
      { n: 0,  expectedResult: 1 },
      { n: 1,  expectedResult: 1 },
      { n: 2,  expectedResult: 2 },
      { n: 3,  expectedResult: 6 },
      { n: 4,  expectedResult: 24 },
      { n: 12, expectedResult: 479001600 }
    ];

    for (let i = 0; i < samples.length; i++) {
      let sample = samples[i];
      let result = factorial(sample.n);
      expect(result).toBe(sample.expectedResult);
    }
  });

  it('should calculate a partial factorial', () => {
    const result = factorial(32, 29);
    expect(result).toBe(863040);
  });

  it('should throw an exception if stop value is negative', () => {
    expect(() => factorial(1, -1)).toThrow(Error);
  });

  it('should throw an exception if stop value is greater than n', () => {
    expect(() => factorial(1, 2)).toThrow(Error);
  });
});