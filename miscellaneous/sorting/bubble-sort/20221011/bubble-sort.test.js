const bubbleSort = require('./bubble-sort');

const inputs = [
    [],
    [1],
    [2, 1],
    [4, 1, 3, 2, 5]
];

describe('Bubble sort', () => {
    inputs.forEach(nums => {
        it('Sorts ' + JSON.stringify(nums), () => {
            expect(bubbleSort(nums)).toEqual(nums.sort((a, b) => a - b));
        })
    })
});