import { describe, expect, test } from '@jest/globals';
import { sum } from '..';
import * as fc from 'fast-check';

describe('Template test suite', () => {
  test('Dummy sum test', () => {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        expect(sum(a, b)).toStrictEqual(a + b);
      })
    );
  });
});
