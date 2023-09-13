import { SanitizedDate } from './util';
import { FloatWeight } from './util';
import { MaxWeight } from './util';
import { MissWeight } from './util';

describe('SanitizedDate function', () => {
  test('should correctly parse valid date', () => {
    const todaysDate = new Date();
    const dateStr = todaysDate.toISOString();
    const expectedDate = new Date(dateStr);
    const result = SanitizedDate(dateStr);
    expect(result).toBe(expectedDate);
  });

  test('invalid date for invalid date string', () => {
    const invalidDateStr = 'NotDateStr';
    const result = SanitizedDate(invalidDateStr);
    expect(result.toString()).toBe('Invalid Date');
  });
});

describe('FloatWeight function', () => {
  test('should return 1 decimal place', () => {
    const weight = 64.85;
    const result = FloatWeight(weight);
    expect(result).toEqual(64.9);
  });

  test('should return 0 because of input other than number', () => {
    expect(FloatWeight(null)).toBe(0);
    expect(FloatWeight(undefined)).toBe(0);
  });

  test('should handle negative weights', () => {
    expect(FloatWeight(-5.678)).toBe(-5.7);
    expect(FloatWeight(0)).toBe(0.0);
  });
});

describe('MaxWeight', () => {
  test('should return the weight when it is less than 1000', () => {
    expect(MaxWeight(500)).toBe(500);
  });

  test('should return 0 when weight is equal to or greater than 1000', () => {
    expect(MaxWeight(1000)).toBe(0);
  });
  test('should return 0 when weight is not a number', () => {
    expect(MaxWeight(null)).toBe(0);
    expect(MaxWeight(undefined)).toBe(0);
  });
});

describe('MissWeight', () => {
  test('should return number when weight is number ', () => {
    const weight = 56;
    expect(MissWeight(weight)).toBe(56);
  });
  test('should return 0 when weight is other than number', () => {
    expect(MaxWeight(null)).toBe(0);
    expect(MaxWeight(undefined)).toBe(0);
  });
  test('should return 0 when weight is negative', () => {
    expect(MissWeight(-1)).toBe(0);
  });
});
