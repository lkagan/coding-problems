const sort = require('./selection-sort');

const testCases = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
];

describe('Selection sort', () => {
    testCases.forEach(nums => {
        it(`Sorts [${ nums }]`, () => {
            expect(sort([...nums])).toEqual([...nums].sort((a, b) => a - b));
        })
    })
})