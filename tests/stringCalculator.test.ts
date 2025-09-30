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

describe('String Calculator - Step 3', () => {
  it('handles newlines as delimiters along with commas', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('4\n5\n6')).toBe(15);
  });
});

describe('String Calculator - Step 4', () => {
  it('supports a custom single-character delimiter using //;\n syntax', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//#\n2#3#4')).toBe(9);
  });
});

describe('String Calculator - Step 5', () => {
  it('throws on a single negative number with the value in message', () => {
    expect(() => add('1,-2,3')).toThrow('negatives not allowed: -2');
  });

  it('throws listing all negative numbers in the message', () => {
    expect(() => add('1,-2,-3,4')).toThrow('negatives not allowed: -2,-3');
  });
});

// ignoring > 1000
test('numbers greater than 1000 are ignored', () => {
  expect(add('2,1001')).toBe(2);
  expect(add('1000,1001,3')).toBe(1003);
});

// multi-length delimiters
test('allows delimiters of any length', () => {
  expect(add('//[***]\n1***2***3')).toBe(6);
});

// multiple delimiters
test('allows multiple delimiters', () => {
  expect(add('//[*][%]\n1*2%3')).toBe(6);
});

// multiple delimiters with length >1
test('allows multiple delimiters with length >1', () => {
  expect(add('//[foo][bar]\n1foo2bar3')).toBe(6);
});
