const { bubbleSort } = require('./bubble-sort');

const numbers = [
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2],
    [2, 1],
    [2],
    []
];

test('Bubble-sort sorts correctly', () => {
    for (const nums of numbers) {
        expect(bubbleSort(nums)).toEqual(nums.sort((a,b)=> b-a));
    }
});
