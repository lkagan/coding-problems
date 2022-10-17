'strict mode';

const quickSort = require('./quick-sort');

const testCases = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
];

testCases.forEach(nums => {
    it(`quickSort([${nums}])`, () => {
        expect(quickSort([...nums], 0, nums.length - 1))
            .toEqual([...nums].sort((a,b) => a - b));
    })
})