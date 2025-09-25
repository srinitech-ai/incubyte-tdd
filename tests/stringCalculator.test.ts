import { add } from '../src/stringCalculator';

describe('String Calculator - Step 1', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number for a single value', () => {
    expect(add('5')).toBe(5);
    expect(add('42')).toBe(42);
  });

  it('returns the sum for two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
    expect(add('10,20')).toBe(30);
  });
});

describe('String Calculator - Step 2', () => {
  it('returns the sum for an unknown amount of comma-separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
    expect(add('5,5,5,5')).toBe(20);
    expect(add('7,8,9,10,11')).toBe(45);
  });
});

