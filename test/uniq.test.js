const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  test('de-dups an empty list', () => {
    const list = [];
    expect(_.uniq(list)).toEqual([]);
  });

  test('de-dups a list of strings', () => {
    const string = ['apple', 'orange', 'banana', 'apple'];
    expect(_.uniq(string)).toEqual(['apple', 'orange', 'banana']);
  });
});