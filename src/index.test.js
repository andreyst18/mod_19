//const getReverseString = require('./index');
//const sum = require('./sum');

import { getReverseString } from './index';
import { sum } from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('check reverse string', () => {
  const result = getReverseString('hello');
  expect(result).toBe('olleh');
});