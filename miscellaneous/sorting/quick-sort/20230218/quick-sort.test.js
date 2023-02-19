const quickSort = require('./quick-sort');

const testData = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
];

testData.forEach(data => {
    it(`quickSort([${data}`, () => {
        expect(quickSort([...data], 0, data.length - 1))
            .toEqual(data.sort((a,b) => a - b));
    })
})