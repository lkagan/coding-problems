const selectSort = require('./20220929.js');

const nums = [ 2, 1, 5, 7, 6, 9, 0 ];

test('Selection Sort', () => {
    expect(selectSort(nums)).toEqual(nums.sort((a, b) => a - b));
})