const { numIslands } = require('./20221130');

const testCases = [
    {
        count: 1,
        grid: [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ],
    }, {
        count: 3,
        grid: [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ],
    }
];

testCases.forEach((testCase, index) => {
    it(`numIslands(testCases[${index}])`, () => {
        expect(numIslands(testCase.grid)).toEqual(testCase.count);
    });
});