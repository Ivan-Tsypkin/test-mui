import { test, expect } from '@jest/globals';
import sum from './sum';

test('test sum, 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
